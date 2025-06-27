const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_management",
});

app.post("/employees", (req, res) => {
  const { name, position, wage, gender } = req.body;
  db.query(
    "INSERT INTO employee (name, position, wage, gender) VALUE(?, ?, ?, ?)",
    [name, position, wage, gender],
    (error, result) => {
      if (error) {
        res
          .status(500)
          .send("Cannot add. Somthing went wrong, please try again.");
      } else {
        res.status(200).send("Employee inserted");
      }
    }
  );
});

app.delete("/employees/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE from employee WHERE id = ?", [id], (error, result) => {
    if (error) {
      res.status(500).send("Database error");
    } else {
      res.status(200).send(result);
    }
  });
});

app.put("/employees/:id", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employee SET wage = ? WHERE id = ?",
    [wage, id],
    (error, result) => {
      if (error) {
        res.status(500).send("Database error");
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employee", (error, result) => {
    if (error) {
      return res.status(500).send("Database sever is Error");
    }
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000.");
});
