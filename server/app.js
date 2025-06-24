const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: '...'
// });

app.get('/', (req, res) => {
    res.send('Hello world.');
});

app.listen(3000, () => {
    console.log('Server is running at port 3000.')
});