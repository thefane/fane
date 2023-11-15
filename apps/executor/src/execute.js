const { exec } = require('node:child_process');
const { error } = require('node:console');
const { stdout } = require('node:process');

exec('mv ../volume ../sandbox/file',(error,stdout)=>{
    if(error) {
        console.log(error)
        return;
    };
    console.log(stdout);
});

// const command = "docker run uniimg "