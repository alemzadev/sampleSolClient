import * as Web3 from '@solana/web3.js';
import { getBalanceUsingWeb3 } from './libs/read.js';
import { sendSol } from './libs/write.js';

import config from './settings-local.js';

const address1 = new Web3.PublicKey(config.Address1);
const address2 = new Web3.PublicKey(config.Address2);
const connection = new Web3.Connection(Web3.clusterApiUrl(config.Network));
// Here we request an airdrop to address1 so it has balance to transfer to address2
connection.requestAirdrop(
    address1,
    Web3.LAMPORTS_PER_SOL,
  ).then((signature)=>{console.log(signature)},
  (error) => {
    console.log(error); });
getBalanceUsingWeb3(connection, address1).then(balance => {
    console.log(balance/Web3.LAMPORTS_PER_SOL);
})
getBalanceUsingWeb3(connection, address2).then(balance => {
  console.log(balance/Web3.LAMPORTS_PER_SOL);
})

// sendSol(address1,address2, 0.05,config.keypair, connection);