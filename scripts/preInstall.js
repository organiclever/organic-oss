const fs = require('fs');

const NX_JSON_TEMPLATE_PATH = '../generator/template/nx-json-template.json';
const NX_JSON_PATH = './nx.json';
const CRED_FILE_PATH = '../organic-cred.json';

const nxConfig = require(NX_JSON_TEMPLATE_PATH);

let cred;

const isCredFileExist = fs.existsSync(CRED_FILE_PATH);

if (isCredFileExist) {
  cred = require(CRED_FILE_PATH);
}

console.log('Pre-install script - Starting');

const accessToken = isCredFileExist ? cred.accessToken : null;

let newNxConfig;

if (accessToken) {
  newNxConfig = { ...nxConfig, accessToken };
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
