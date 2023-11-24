const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
});


async function getSchemas(bucketName, prefix) {
    const params = {
        Bucket: bucketName,
        Prefix: prefix
    };
    const data = await s3.listObjectsV2(params).promise();
    const schemaFiles = data.Contents.map(obj => obj.Key);
    return schemaFiles;
};

async function getConfigs(bucketName, prefix) {
    const params = {
        Bucket: bucketName,
        Prefix: prefix
    };
    const data = await s3.listObjectsV2(params).promise();
    const configFiles = data.Contents.map(obj => obj.Key);
    return configFiles;
};

module.exports = {
    getSchemas,
    getConfigs
}