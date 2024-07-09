import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./wallet.json";

 // my wallett 
 require('dotenv').config();
   
 const kpArrayStr = process.env.KP_ARRAY;
 if (!kpArrayStr) {
      throw new Error('KP_ARRAY not found in .env file');
  }

 const kpIntArray = kpArrayStr.split(',').map(Number);



// Load the keypair from the wallet.json file
const keypair = Keypair.fromSecretKey(new Uint8Array(kpIntArray));


// Establish a connection to the Solana Devnet
const connection = new Connection("https://api.devnet.solana.com");

// Asynchronous function to request airdrop
(async () => {
  try {
    // Request an airdrop of 2 SOL to the public key associated with the keypair
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      10 * LAMPORTS_PER_SOL
    );
    // Log the success message along with the transaction hash
    console.log(`Success! Check out your TX here: 
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    // Log an error message if something goes wrong
    console.error(`Oops, something went wrong: ${e}`);
  }
})();