const db = require("../config/db");
const sendEmail = require("../utils/sendEmail");
function generateToken() {
    return Math.floor(100000 + Math.random() * 900000);
}

const vehicleEntry = (req, res) => {
    const { vehicle_number, type, mobile_number,email } = req.body;
    const token = generateToken();
    const entry_time = new Date();

    db.query(
        "INSERT INTO parking (vehicle_number, type, token, entry_time, mobile_number, email) VALUES (?,?,?,?,?,?)",
        [vehicle_number, type, token, entry_time, mobile_number,email],
        (err) => {
            if(err) return res.json({error: err});
           sendEmail(email, token);

            res.json({message:"Vehicle Entry Added", token});
        }
    );
};

const vehicleExit = (req, res) => {
    const { token } = req.body;

    db.query("SELECT * FROM parking WHERE token=?", [token], (err, result) => {
        if(err) return res.json({error: err});
        if(result.length === 0) return res.json({message: "Invalid Token"});

        const entryTime = new Date(result[0].entry_time);
        const exitTime = new Date();
        const hours = Math.ceil((exitTime - entryTime)/(1000*60*60));
        const charges = hours * 20;

        // Update DB with exit_time and charges
        db.query(
            "UPDATE parking SET exit_time=?, charges=? WHERE token=?",
            [exitTime, charges, token],
            (err2) => {
                if(err2) return res.json({error: err2});

                // Return charges + token for frontend
                res.json({
                    token,
                    vehicle_number: result[0].vehicle_number,
                    hours,
                    charges,
                    message: "Payment Options"
                });
            }
        );
    });
};

const completePayment = (req, res) => {
    const { token, method } = req.body;

    db.query(
        "UPDATE parking SET payment_method=? WHERE token=?",
        [method, token],
        (err) => {
            if(err) return res.json({error: err});
            res.json({message:`Payment Done via ${method}`});
        }
    );
};

module.exports = {
    vehicleEntry,
    vehicleExit,
    completePayment
};
