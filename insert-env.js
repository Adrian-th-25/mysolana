// generate-keypair.js
const fs = require('fs');
const { Keypair } = require('@solana/web3.js');

const keypair = Keypair.generate();
const secretKey = JSON.stringify(Array.from(keypair.secretKey));

console.log('Public Key:', keypair.publicKey.toBase58());

// Save to .env file
fs.writeFileSync('.env', `SECRET_KEY=${secretKey}`);
console.log('Secret key saved to .env');
