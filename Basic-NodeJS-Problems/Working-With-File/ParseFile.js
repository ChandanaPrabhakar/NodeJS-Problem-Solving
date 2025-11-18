//Parse a JSON file and log  values

import fs from 'fs/promises';

async function parseJSON(){
    const data = await fs.readFile('data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    console.log(`Username: ${jsonData.name} Age: ${jsonData.age}`);
}

parseJSON();