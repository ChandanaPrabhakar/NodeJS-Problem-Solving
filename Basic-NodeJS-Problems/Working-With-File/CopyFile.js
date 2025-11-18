//Copy a file

import fs from 'fs/promises';

async function copyFile(){
    fs.copyFile("Output2.txt", "Copy.txt");
    console.log("File copied");
}

copyFile();