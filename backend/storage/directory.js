const fs = require('fs');
const path = require('path');

function getSchemas(baseDirectory) {
    dirPath = path.join(baseDirectory, '/_SCHEMAS')
    return new Promise((resolve, reject) => {
      fs.readdir(dirPath, (err, files) => {
        if (err) {
          reject(err);
          return;
        }
        // Filter out directories and only keep files
        const fileNames = files.filter(file => {
          const filePath = path.join(dirPath, file);
          return fs.statSync(filePath).isFile();
        });
        resolve(fileNames);
      });
    });
};

function getConfigs(baseDirectory, prefix) {
    dirPath = path.join(baseDirectory, '/_CONFIGS', prefix)
    return new Promise((resolve, reject) => {
      fs.readdir(dirPath, (err, files) => {
        if (err) {
          reject(err);
          return;
        }
        // Filter out directories and only keep files
        const fileNames = files.filter(file => {
          const filePath = path.join(dirPath, file);
          return fs.statSync(filePath).isFile();
        });
        resolve(fileNames);
      });
    });
};

module.exports = {
    getSchemas,
    getConfigs
}