//Watch file changes (fs.watch)

import fs from 'fs/promises';

async function fileChanges(){
    fs.watch("Output2.txt", (filename, eventType) => {
        console.log(`filename: ${filename} eventType: ${eventType}`);
    })
    console.log("Watching for file changes..... ");
}

fileChanges();