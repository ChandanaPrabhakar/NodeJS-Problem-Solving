//Use Built-in modules (path, fs, os, events)

import path from "path";
import fs from "fs";
import os from "os";
import EventEmitter from "events";

const filepath = "/Users/chandana/Desktop/NodeJS-Problem-Solving/Basic-NodeJS-Problems/NodeJS-Fundamentals/BuiltInModule.js";
console.log("Base: ", path.basename(filepath));
console.log("Directory: ", path.dirname(filepath));
console.log("Extension: ", path.extname(filepath));

fs.writeFileSync("file.txt", "Hello from Node!.");
console.log("File written.");
const data = fs.readFileSync("file.txt", "utf-8");
console.log("Fie data: ", data);

console.log("CPU: ", os.cpus().length);
console.log("Free memory: ",os.freemem());
console.log("Platform: ", os.platform());

const emitter = new EventEmitter();
emitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
})

emitter.emit('greet', "Chandana");