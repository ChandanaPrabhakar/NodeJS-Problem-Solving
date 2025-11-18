//Append content to a file

import fsPromise from 'fs/promises';

async function appendfile() {
    await fsPromise.appendFile("Output2.txt", "\nAppending additional content");
    console.log("Content appended");
}

appendfile();