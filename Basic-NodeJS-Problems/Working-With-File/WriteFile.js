// Write a file (sync and async)
import fsPromise from 'fs/promises';
import fs from 'fs';

//file write sync
fs.writeFileSync("Output.txt", "Hello from Node! - sync");
console.log("File written sync");

//file write async
async function writefile(){
    await fsPromise.writeFile("Output2.txt", "Hello from Node! - async");
    console.log("File written async");
}

writefile();

