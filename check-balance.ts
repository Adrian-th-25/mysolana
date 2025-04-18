import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("CmdS1ENQC2Y34nJR9W1ZApMtZkT15VEuoJk8GjpTdYuC");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async()=>{const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
    );
})();