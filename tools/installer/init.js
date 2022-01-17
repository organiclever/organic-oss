const { execSync } = require('child_process');

console.log('Init script - Starting');

execSync(
  'yarn global add typescript@4.5.4 && yarn global add ts-node@10.4.0 && yarn global add @types/node@14.14.33',
  { stdio: 'inherit' }
);

console.log('Init script - Finished');
