const fs = require('fs');

const NX_JSON_TEMPLATE = '../generator/template/nx-json-template.json';
const NX_JSON_TARGET = './nx.json';

let cred;

try {
  cred = require('../organic-cred.json');
} catch (e) {}

const nxConfig = require(NX_JSON_TEMPLATE);

console.log('Pre-install script - Starting');

const accessToken = cred.accessToken;

let newNxConfig;

if (accessToken) {
  newNxConfig = { ...nxConfig, accessToken };
} else {
  newNxConfig = nxConfig;
}

fs.writeFile(NX_JSON_TARGET, JSON.stringify(newNxConfig), (err) => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('Successfully wrote file');
  }
});

console.log('Pre-install script - Finished');
