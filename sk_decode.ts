import fs from 'fs';
import bs58 from 'bs58';
import dotenv from 'dotenv';

dotenv.config();

const encodedKey = "5hs7xs93bS5m8pY5D7nZTs3cT4DnEtZQrUNTyaWtZ4x3E7JMHcv7r87P12nuzoAQrpZ8S1Cgo66QLGRMUtazhiWg";

const kp = bs58.decode(encodedKey);

const kpUint8Array = new Uint8Array(kp);

fs.writeFileSync('.env', `KP_ARRAY=${Array.from(kpUint8Array).join(',')}`, 'utf8');

