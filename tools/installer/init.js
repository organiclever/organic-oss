const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Init script - Starting');

const packageJSONFile = path.join(__dirname, '../../package.json');
const rawPackageJson = fs.readFileSync(packageJSONFile, 'utf8');

const installGlobalPackages = ['typescript', 'ts-node', '@types/node']
  .map((p) => `${p}@${JSON.parse(rawPackageJson).devDependencies[p]}`)
  .map((p) => `yarn global add ${p}`)
  .join(' && ');

execSync(installGlobalPackages, { stdio: 'inherit' });

console.log('Init script - Finished');
