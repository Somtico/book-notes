import express from "express";
import pool from "./db.js";

const app = express();
const port = 3000;

pool.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected at:", res.rows[0].now);
  }
});

app.listen(port, () => {
  console.log("App running at port", port);
});
