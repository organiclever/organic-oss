const fs = require('fs');

const NX_JSON_TEMPLATE_PATH = '../tools/template/nx-json-template.json';
const NX_JSON_PATH = './nx.json';
const CRED_FILE_PATH = '../organic-cred.json';

const nxConfig = require(NX_JSON_TEMPLATE_PATH);

let nxCloudAuthToken;

const isCredFileExist = fs.existsSync(CRED_FILE_PATH);
const nxCloudAuthTokenENV = process.env.NX_CLOUD_AUTH_TOKEN;

if (isCredFileExist) {
  nxCloudAuthToken = require(CRED_FILE_PATH).accessToken;
} else if (nxCloudAuthTokenENV) {
  nxCloudAuthToken = process.env.NX_CLOUD_AUTH_TOKEN;
}

console.log('Pre-install script - Starting');

let newNxConfig;

if (nxCloudAuthToken) {
  newNxConfig = { ...nxConfig, accessToken: nxCloudAuthToken };
} else {
  newNxConfig = nxConfig;
}

fs.writeFile(NX_JSON_PATH, JSON.stringify(newNxConfig), (err) => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('Successfully wrote file');
  }
});

console.log('Pre-install script - Finished');
