//Delete folder

import fs from 'fs/promises';

async function deleteFolder(){
    await fs.rmdir('New-Folder');
    console.log("Folder deleted");
}
deleteFolder();