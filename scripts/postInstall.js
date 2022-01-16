const { exec } = require('child_process');

console.log('Post-install script - Starting');

const prettifyList = ['./nx.json'];

exec(
  `yarn prettier --write ${prettifyList.join(' ')}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

console.log('Post-install script - Finished');
