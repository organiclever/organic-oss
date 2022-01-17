const { execSync } = require('child_process');

console.log('Prepare script - Starting');

execSync('yarn husky install', { stdio: 'inherit' });

console.log('Prepare script - Finished');

export {};
