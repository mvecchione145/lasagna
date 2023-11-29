const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

// Connect to MongoDB with error handling and new parser options
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schema models
const schemaFileSchema = new mongoose.Schema({ name: String, data: Buffer, description: String });
schemaFileSchema.index({ name: 1 }); // Create an index on the name field if it is frequently queried

const configFileSchema = new mongoose.Schema({ fileName: String, data: Object, schemaId: String });
configFileSchema.index({ schemaId: 1 }); // Index schemaId if it's used often in queries

const SchemaFile = mongoose.model('SchemaFile', schemaFileSchema);
const ConfigFile = mongoose.model('ConfigFile', configFileSchema);

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}));

// Endpoint to get paginated list of schema files
app.get("/schemas", async (req, res) => {
  try {
    const schemaFiles = await SchemaFile.find().select('name _id description').exec();
    res.json(schemaFiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get a single configuration file
app.get("/configs/:schemaId", async (req, res) => {
  try {
    const configFiles = await ConfigFile.find({ schemaId: req.params.schemaId }).select('name _id description').exec();

    if (!configFiles.length) {
      return res.status(404).send('Configuration file not found.');
    }
    res.json(configFiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get a single configuration file
app.get("/schema/:schemaId", async (req, res) => {
  try {
    const schemaFile = await SchemaFile.findOne({ _id: req.params.schemaId }).exec();

    if (!schemaFile) {
      return res.status(404).send('Configuration file not found.');
    }
    res.json(schemaFile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
