const fs = require('fs');
// const path = require('path');

function getListSchemas(directoryPath) {
  try {
    // Read the directory contents
    const files = fs.readdirSync(directoryPath);

    // Return the array of file names
    return files;
  } catch (error) {
    // Handle errors (e.g., if the directory doesn't exist)
    console.error("Error reading directory:", error);
    return [];
  }
}

module.exports = {
    getListSchemas,
};
