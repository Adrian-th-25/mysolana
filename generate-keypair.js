"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var helpers_1 = require("@solana-developers/helpers");
var keypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
console.log("\u2705 Finished! We've loaded our secret key securely, using an env file!");
