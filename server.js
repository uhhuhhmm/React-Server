const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

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

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "management",
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("지노는 연결중!");
// });

app.get("/api/customers", (req, res) => {
  conn.query("SELECT * FROM customer", (err, data) => {
    res.send(data);
  });
});

app.listen(5000, function () {
  console.log("Server running at http://127.0.0.1:5000");
});
