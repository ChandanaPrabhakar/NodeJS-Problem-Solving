//Create folder

import fs from 'fs/promises';

async function createFolder(){
    await fs.mkdir("New-Folder");
    console.log("folder created");
}

createFolder();