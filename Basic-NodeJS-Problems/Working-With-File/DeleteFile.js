//Delete a file

import fsPromise from 'fs/promises';

async function deletefile(){
    await fsPromise.unlink('Output2.txt');
    console.log("Output2.txt file deleted");
}

deletefile();