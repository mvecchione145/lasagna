const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const { getSchemas, getConfigs } = require("./storage/directory");

const app = express();

const directoryPath = process.env.DIRECTORY_PATH;
const port = process.env.PORT;

app.use(bodyParser.json());

// Endpoint to get paginated list of schema files
app.get("/schemas", async (req, res) => {
  try {
    const schemaFiles = await getSchemas(directoryPath);
    res.json(schemaFiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get paginated list of configuration files
app.get("/configurations", async (req, res) => {
  try {
    const configFiles = await getConfigs(directoryPath);
    res.json(schemaFiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(parseInt(port), () => {
  console.log(`Server is running on port ${port}`);
});
