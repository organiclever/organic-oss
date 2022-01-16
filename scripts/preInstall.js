const fs = require('fs');

const NX_JSON_TEMPLATE = '../generator/template/nx-json-template.json';
const NX_JSON_TARGET = './nx.json';

const cred = require('../organic-cred.json');
const nxConfig = require(NX_JSON_TEMPLATE);

console.log('Pre-install script - Starting');

const accessToken = cred.accessToken;

const newNxConfig = { ...nxConfig, accessToken };

fs.writeFile(NX_JSON_TARGET, JSON.stringify(newNxConfig), (err) => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('Successfully wrote file');
  }
});

console.log('Pre-install script - Finished');
