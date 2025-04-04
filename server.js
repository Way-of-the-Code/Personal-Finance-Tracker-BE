const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'pf_tracker',
    user: 'root',
    password: 'root',
})

connection.connect(function(err) {
    if (err) {
        console.log('Error connecting to MySQL:', err.stack);
    } else {
        console.log('Connected to MySQL');
    }
});