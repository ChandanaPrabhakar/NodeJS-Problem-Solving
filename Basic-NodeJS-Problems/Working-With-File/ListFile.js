//List file inside a folder
import fs from 'fs/promises';

async function listFiles(){
    const files = await fs.readdir('.');
    console.log('List of files: ', files);
}

listFiles();