const { execSync } = require('child_process');
const path = require('path');

console.log('Post-install script - Starting');

// Relative to the root
const prettifyList = ['./nx.json'];

execSync(`yarn prettier --write ${prettifyList.join(' ')}`, {
  stdio: 'inherit',
});

console.log('Post-install script - Finished');

export {};
