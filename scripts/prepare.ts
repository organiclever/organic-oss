const { exec } = require('child_process');

console.log('Prepare script - Starting');

const prettifyList = ['./nx.json'];

exec('yarn husky install', (error: any, stdout: any, stderr: any) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

console.log('Prepare script - Finished');

export {};
