"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
require("dotenv/config");
var helpers_1 = require("@solana-developers/helpers");
//   const suppliedToPubkey = process.argv[2] || null;
//   if (!suppliedToPubkey) {
//     console.log(`Please provide a public key to send to`);
//     process.exit(1);
//   }
var suppliedToPubkey = new web3_js_1.PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
var senderKeypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
console.log("suppliedToPubkey: ".concat(suppliedToPubkey));
var toPubkey = new web3_js_1.PublicKey(suppliedToPubkey);
var connection = new web3_js_1.Connection("https://api.devnet.solana.com", "confirmed");
console.log("\u2705 Loaded our own keypair, the destination public key, and connected to Solana");
var transaction = new web3_js_1.Transaction();
var LAMPORTS_TO_SEND = 5000;
var sendSolInstruction = web3_js_1.SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey: toPubkey,
    lamports: LAMPORTS_TO_SEND,
});
transaction.add(sendSolInstruction);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var signature;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // const balance = await connection.getBalance(senderKeypair.publicKey);
            // console.log("Wallet balance:", balance / LAMPORTS_PER_SOL, "SOL");
            return [4 /*yield*/, connection.requestAirdrop(senderKeypair.publicKey, 2 * web3_js_1.LAMPORTS_PER_SOL)];
            case 1:
                // const balance = await connection.getBalance(senderKeypair.publicKey);
                // console.log("Wallet balance:", balance / LAMPORTS_PER_SOL, "SOL");
                _a.sent();
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
                        senderKeypair,
                    ])];
            case 2:
                signature = _a.sent();
                console.log("\uD83D\uDCB8 Finished! Sent ".concat(LAMPORTS_TO_SEND, " to the address ").concat(toPubkey, ". "));
                console.log("Transaction signature is ".concat(signature, "!"));
                return [2 /*return*/];
        }
    });
}); })();
