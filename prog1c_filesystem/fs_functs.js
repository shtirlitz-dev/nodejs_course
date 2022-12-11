//import { stat } from 'fs';
const fs = require('fs');


/*
try{
const stats = fs.statSync("D:\\tmp\\paragon migrate os.txt");
console.log(stats);
}
catch(err){
console.error(err);
}
*/

fs.stat("D:\\tmp\\paragon migrate os.txt", (err, stats) => {
    if(err)
        console.error(err);
    console.log(stats);
});
console.log('now');

// var 3
const fsp = require('fs').promises;

(async() => {
    try {
        const stats = await fsp.stat("D:\\tmp\\paragon migrate os.txt");
        console.log(stats);
    }
    catch(err){
        console.error(err);
    }

})();
 console.log('now2');
