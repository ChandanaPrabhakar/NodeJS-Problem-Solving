//Move(Rename) a file

import fs from 'fs/promises';

async function moveFile(){
    await fs.rename('Copy.txt', 'movedFile.txt');
    console.log("File renamed");
}

moveFile();