const child_process= require('child_process');

child_process.exec('fsCoreModule.js',(err, stdout, stdin)=>{
    console.log(stdout);

})