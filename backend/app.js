const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const multer = require('multer'); // Import multer
const fs = require('fs');
const path = require('path');

require("dotenv").config();

const { getSchemas, getConfigs } = require("./storage/directory");

const app = express();

const directoryPath = process.env.DIRECTORY_PATH || 'schemas'; // Default to 'schemas' if not set
const frontendUrl = process.env.FRONTEND_URL;
const port = process.env.PORT;

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(directoryPath, '_SCHEMAS'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(cors({
  origin: frontendUrl,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));

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
app.get("/configs/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params;
    const configFiles = await getConfigs(directoryPath, fileName);
    res.json(configFiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to upload a schema file
app.post("/upload-schema", upload.single('schema'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.status(200).json({ message: "File uploaded successfully", file: req.file });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(parseInt(port), () => {
  console.log(`Server is running on port ${port}`);
});

// Ensure the directory exists
if (!fs.existsSync(directoryPath)){
  fs.mkdirSync(directoryPath, { recursive: true });
}
