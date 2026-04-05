/* eslint-env node */
require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "..")));

// A simple route to test the database connection
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW() as current_time");
    res.json({
      success: true,
      message: "Successfully connected to PostgreSQL!",
      time: result.rows[0].current_time,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to connect to the database.",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(
    `Test the database connection by visiting http://localhost:${port}/api/test-db`,
  );
});
