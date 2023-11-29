const mongoose = require('mongoose');
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema models
const SchemaFile = mongoose.model('SchemaFile', new mongoose.Schema({ name: String, data: Buffer }));
const ConfigFile = mongoose.model('ConfigFile', new mongoose.Schema({ fileName: String, data: Object, schemaId: String }));

// Create an async IIFE (Immediately Invoked Function Expression) to use await
(async () => {
  try {
    let schemaId = "6565f26877fa4e4ca6004bbc";
    let configFiles = await ConfigFile.find({ schemaId }).select('name _id description').exec();
    console.log(configFiles);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
})();
