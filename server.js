const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
// 문자열로 받아진 데이터를 parse하여 객체 형태로 받는다.
const conf = JSON.parse(data);

const conn = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

conn.connect();

app.get("/api/customers", (req, res) => {
  conn.query("SELECT * FROM customer where isDeleted = 0", (err, rows, field) => {
    res.send(rows);
  });
});

app.post("/api/customers", (req, res) => {
  let sql = "INSERT INTO customer values (null, 'https://placeimg.com/64/64/any', ?, ?, ?, ?, now(), 0)";
  let name = req.body.name;
  let birth = req.body.birthday;
  let gen = req.body.gender;
  let job = req.body.job;
  let params = [name, birth, gen, job];

  conn.query(sql, params, (err, rows, field) => {
    res.send(rows);
  });
});

app.delete("/api/customers/:id", (req, res) => {
  let sql = "update customer set isDeleted = 1 where id = ?";
  let params = [req.params.id];
  conn.query(sql, params, (err, rows, field) => {
    res.send(rows);
  });
});

app.put("/api/customers/:id", (req, res) => {
  let sql =
    "update customer set values(id, 'https://placeimg.com/64/64/any', name = ?, birthday = ?, gender = ?, job = ?, now(), 0)";
  let name = req.body.name;
  let birth = req.body.birthday;
  let gen = req.body.gender;
  let job = req.body.job;
  let params = [name, birth, gen, job];

  conn.query(sql, params, (err, rows, field) => {
    res.send(rows);
  });
});

// Object 부르기
// app.get("/api/customers", function (req, res) {
//   res.send([
//     {
//       id: 1,
//       image: "http://placeimg.com/120/120/1",
//       name: "Kevin",
//       birthday: "931231",
//       gender: "Alien",
//       job: "Villain",
//     },
//     {
//       id: 2,
//       image: "http://placeimg.com/120/120/2",
//       name: "Stuart",
//       birthday: "941231",
//       gender: "Alien",
//       job: "Villain",
//     },
//     {
//       id: 3,
//       image: "http://placeimg.com/120/120/3",
//       name: "Bob",
//       birthday: "971231",
//       gender: "Alien",
//       job: "Villain",
//     },
//   ]);
// });

app.listen(5000, function () {
  console.log("Server running at http://127.0.0.1:5000");
});
