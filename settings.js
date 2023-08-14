// Make a copy of this file to settings-local.js and edit it
import * as Web3 from '@solana/web3.js';
import fs from "fs";

// In order to sign transactions we need the private key AKA Keypair.
// This is not the best practice to have the keypair on hardware.
// for two reasons ,First on disk wallets are not the best solutions.
// Second, It's better for a DApp not to have access to the keypair and
// delegate to transaction signature to the third party wallet of user's choice.
// yet here for the purpose of development we load the key pair from hard disk.
const keypairPath = './path/to/keypair.json';
const secret = JSON.parse(fs.readFileSync(keypairPath).toString());
const secretKey = Uint8Array.from(secret);
let kp = Web3.Keypair.fromSecretKey(secretKey);
export default config = {
    Network: 'devnet',//'devnet', 'testnet', 'mainnet-beta'
    Address1: 'sample publicKey of a keypair AKA address',
    Address2:'sample publicKey of a keypair AKA address',
    keypair: kp,
}