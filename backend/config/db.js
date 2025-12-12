const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});

db.connect((err) => {
    if (err) {
        console.log("MySQL Error:", err);
    } else {
        console.log("MySQL Connected...");
    }
});

module.exports = db;
