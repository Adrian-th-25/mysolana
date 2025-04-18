//I didn't do this perfectly
import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  import "dotenv/config";
  import { getKeypairFromEnvironment } from "@solana-developers/helpers";
  
//   const suppliedToPubkey = process.argv[2] || null;
  
//   if (!suppliedToPubkey) {
//     console.log(`Please provide a public key to send to`);
//     process.exit(1);
//   }
  const suppliedToPubkey = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");


  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
  
  console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
  
  const toPubkey = new PublicKey(suppliedToPubkey);
  
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  
  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
  );

  
  const transaction = new Transaction();
  
  const LAMPORTS_TO_SEND = 5000;

  
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });
  
  transaction.add(sendSolInstruction);
  
  (async()=>{

        // const balance = await connection.getBalance(senderKeypair.publicKey);
        // console.log("Wallet balance:", balance / LAMPORTS_PER_SOL, "SOL");

        await connection.requestAirdrop(senderKeypair.publicKey, 2 * LAMPORTS_PER_SOL);

        const signature = await sendAndConfirmTransaction(connection, transaction, [
            senderKeypair,
        ]);
  
        console.log(
            `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
        );
        console.log(`Transaction signature is ${signature}!`);
    })();