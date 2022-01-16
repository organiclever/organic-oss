const { exec } = require('child_process');

console.log('Running prepare script');

const prettifyList = ['./nx.json'];

exec('yarn husky install', (error, stdout, stderr) => {
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

console.log('Finished running prepare script');
