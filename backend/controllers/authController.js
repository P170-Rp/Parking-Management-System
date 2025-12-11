const db = require("../config/db");

exports.signup = (req, res) => {
    const { username, password } = req.body;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err) => {
            if (err) return res.json({ error: err });
            res.json({ message: "Signup Successful" });
        }
    );
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if (err) return res.json({ error: err });

            if (result.length > 0) {
                res.json({ message: "Login Success" });
            } else {
                res.json({ message: "Invalid Credentials" });
            }
        }
    );
};
