const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

// Define Schema models
const SchemaFile = mongoose.model('SchemaFile', new mongoose.Schema({ name: String, data: Buffer }));
const ConfigFile = mongoose.model('ConfigFile', new mongoose.Schema({ fileName: String, data: Object }));

const app = express();

const frontendUrl = process.env.FRONTEND_URL;
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({
  origin: frontendUrl,
  optionsSuccessStatus: 200
}));

// Endpoint to get paginated list of schema files
app.get("/schemas", async (req, res) => {
  try {
    const schemaFiles = await SchemaFile.find().select('name -_id').exec();
    res.json(schemaFiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get a single configuration file
app.get("/configs/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params;
    const configFile = await ConfigFile.findOne({ fileName }).exec();
    if (!configFile) {
      return res.status(404).send('Configuration file not found.');
    }
    res.json(configFile.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to upload a schema file
// app.post("/upload-schema", upload.single('schema'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).send('No file uploaded.');
//     }
//     const newSchema = new SchemaFile({ name: req.file.originalname, data: req.file.buffer });
//     await newSchema.save();
//     res.status(200).json({ message: "File uploaded successfully", file: req.file.originalname });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.listen(parseInt(port), () => {
  console.log(`Server is running on port ${port}`);
});
