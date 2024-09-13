const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();
const port = 3000;
app.use(bodyParser.json());

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "9959",
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Error connecting to PostgreSQL", err));

app.get("/", (req, res) => {
  res.send("Routes you can use: /create_table, /insert_values, /read_table, /read_subset, /update_data, /delete_table");
});

// Create Table
app.post("/create_table", async (req, res) => {
  const { tableName, columns, dataTypes } = req.body;
  
  if (!tableName || !columns || !dataTypes || columns.length !== dataTypes.length) {
    return res.status(400).send("Invalid request body");
  }

  let query = `CREATE TABLE ${tableName} (`;
  for (let i = 0; i < columns.length; i++) {
    query += `${columns[i]} ${dataTypes[i]}`;
    if (i < columns.length - 1) {
      query += `, `;
    }
  }
  query += `);`;

  try {
    await client.query(query);
    console.log("Table created successfully");
    res.status(201).send("Table created successfully");
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
});

// Insert Values
app.post("/insert_values", async (req, res) => {
  const { tableName, columns, values } = req.body;
  
  if (!tableName || !columns || !values) {
    return res.status(400).send("Invalid request body");
  }

  let query = `INSERT INTO ${tableName} (`;
  for (let i = 0; i < columns.length; i++) {
    query += `${columns[i]}`;
    if (i < columns.length - 1) {
      query += `, `;
    }
  }
  query += `) VALUES (`;
  
  for (let i = 0; i < values.length; i++) {
    query += `'${values[i]}'`;
    if (i < values.length - 1) {
      query += `, `;
    }
  }
  query += `);`;

  try {
    await client.query(query);
    console.log("Values inserted successfully");
    res.status(201).send("Values inserted successfully");
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
});

// Read Table
app.get("/read_table/:tableName", async (req, res) => {
  const { tableName } = req.params;

  if (!tableName) {
    return res.status(400).send("Invalid table name");
  }

  const query = `SELECT * FROM ${tableName};`;

  try {
    const result = await client.query(query);
    console.log("Table read successfully");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
});

// Read Subset of Table
app.get("/read_subset/:tableName/:column", async (req, res) => {
  const { tableName, column } = req.params;

  if (!tableName || !column) {
    return res.status(400).send("Invalid request parameters");
  }

  const query = `SELECT ${column} FROM ${tableName};`;

  try {
    const result = await client.query(query);
    console.log("Subset of table read successfully");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
});

// Update Data
app.put("/update_data/:tableName", async (req, res) => {
  const { tableName } = req.params;
  const { columnName, columnValue, conditionColumn, conditionValue } = req.body;

  if (!tableName || !columnName || !columnValue || !conditionColumn || !conditionValue) {
    return res.status(400).send("Invalid request body");
  }

  const query = `UPDATE ${tableName} SET ${columnName} = '${columnValue}' WHERE ${conditionColumn} = '${conditionValue}';`;

  try {
    await client.query(query);
    console.log("Data updated successfully");
    res.status(200).send("Data updated successfully");
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
});

// Delete Table
app.delete("/delete_table/:tableName", async (req, res) => {
  const { tableName } = req.params;

  if (!tableName) {
    return res.status(400).send("Invalid table name");
  }

  const query = `DROP TABLE IF EXISTS ${tableName};`;

  try {
    await client.query(query);
    console.log("Table dropped successfully");
    res.status(200).send("Table dropped successfully");
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
