import fs from 'fs';
import bs58 from 'bs58';
import dotenv from 'dotenv';

dotenv.config();

   
const encodedKey = process.env.encodedKey;
if (!encodedKey) {
     throw new Error('encodedKey not found in .env file');
 }


const kp = bs58.decode(encodedKey);

const kpUint8Array = new Uint8Array(kp);

fs.writeFileSync('.env', `KP_ARRAY=${Array.from(kpUint8Array).join(',')}`, 'utf8');

