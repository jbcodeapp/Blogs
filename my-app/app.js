const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_restapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Retrieve all items
app.get("/api/items", (req, res) => {
  let sqlQuery = "SELECT * FROM items";

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Get details of a specific item
app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  let sqlQuery = `SELECT * FROM items WHERE id = ${itemId}`;

  let query = conn.query(sqlQuery, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send(apiResponse("Item not found"));
    } else {
      res.send(apiResponse(result[0]));
    }
  });
});

// Create a new item
app.post("/api/items", (req, res) => {
  const { title, body } = req.body;
  let sqlQuery = `INSERT INTO items (title, body) VALUES ('${title}', '${body}')`;

  let query = conn.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.send(apiResponse("Item created successfully"));
  });
});

// Update an existing item
app.put("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const { title, body } = req.body;
  let sqlQuery = `UPDATE items SET title = '${title}', body = '${body}' WHERE id = ${itemId}`;

  let query = conn.query(sqlQuery, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).send(apiResponse("Item not found"));
    } else {
      res.send(apiResponse("Item updated successfully"));
    }
  });
});

// Delete an item
app.delete("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  let sqlQuery = `DELETE FROM items WHERE id = ${itemId}`;

  let query = conn.query(sqlQuery, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).send(apiResponse("Item not found"));
    } else {
      res.send(apiResponse("Item deleted successfully"));
    }
  });
});

function apiResponse(data) {
  return JSON.stringify({ status: 200, error: null, response: data });
}

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
