import express from "express";
import pool from "./db.js";

const app = express();
const port = 3000;

pool.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log("App running at port", port);
});
