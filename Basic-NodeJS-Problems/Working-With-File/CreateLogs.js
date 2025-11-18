//Create logs with timestamps

import fs from 'fs/promises';

async function logs(message){
    const timestamps = new Date().toISOString();
    await fs.appendFile('app.log', `[${timestamps}], ${message}`);
    console.log("log added");
}

logs("Server started");