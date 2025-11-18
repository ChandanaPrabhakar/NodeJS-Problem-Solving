//Read file (sync and async)
import fs from 'fs';
import fsPromise from "fs/promises";

//read file sync
const data = fs.readFileSync("Output.txt", "utf-8");
console.log("sync read: ",data);

//read file async
async function readfile(){
    const data = await fsPromise.readFile("Output2.txt", "utf-8");
    console.log("async read: ",data);
}
readfile();