const fs = require('fs');
const path = require('path');

const NX_JSON_TEMPLATE_PATH = path.join(
  __dirname,
  '../tools/template/nx-json-template.json'
);
const NX_JSON_PATH = path.join(__dirname, '../nx.json');
const CRED_FILE_PATH = path.join(__dirname, '../organic-cred.json');

const nxConfig = require(NX_JSON_TEMPLATE_PATH);

let nxCloudAuthToken;

const isCredFileExist = fs.existsSync(CRED_FILE_PATH);
const nxCloudAuthTokenENV = process.env.NX_CLOUD_AUTH_TOKEN;

if (isCredFileExist) {
  nxCloudAuthToken = require(CRED_FILE_PATH).accessToken;
} else if (nxCloudAuthTokenENV) {
  nxCloudAuthToken = process.env.NX_CLOUD_AUTH_TOKEN;
} else {
  console.log(
    'Cred File and NX_CLOUD_AUTH_TOKEN ENV are not found. Not using cache for NX'
  );
}

console.log('Pre-install script - Starting');

let newNxConfig;

if (nxCloudAuthToken) {
  newNxConfig = {
    ...nxConfig,
    tasksRunnerOptions: {
      ...nxConfig.tasksRunnerOptions,
      default: {
        ...nxConfig.tasksRunnerOptions.default,
        options: {
          ...nxConfig.tasksRunnerOptions.default.options,
          accessToken: nxCloudAuthToken,
        },
      },
    },
  };
} else {
  newNxConfig = nxConfig;
}

const newNxConfigAsString = JSON.stringify(newNxConfig, null, 2);

fs.writeFileSync(NX_JSON_PATH, newNxConfigAsString);

console.log('Pre-install script - Finished');
