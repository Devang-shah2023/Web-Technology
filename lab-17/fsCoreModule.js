const fs= require('fs');

fs.exists('pathCoreModule.js',(exists)=>{
    console.log(exists ? 'Found': 'Not Found');

});
fs.stat('pathCoreModule.js', (err, data)=>{
    console.log(data);
});

const data= fs.readFileSync('pathCoreModule.js');
console.log(data.toString());

