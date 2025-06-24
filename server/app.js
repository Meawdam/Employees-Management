const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees-management'
});

app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employee', (error, result) => {
        if(error){
            return res.status(500).send('Database sever is Error');
        }
        res.send(result.json());
    });
});

app.listen(3000, () => {
    console.log('Server is running at port 3000.')
});