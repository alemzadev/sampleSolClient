import * as Web3 from '@solana/web3.js';

export async function sendSol(sender, recipient, amount, senderKeypair, connection) {
    const transaction = new Web3.Transaction();
    const sendSolInstruction = Web3.SystemProgram.transfer({
        fromPubkey: sender,
        toPubkey: recipient,
        lamports:Web3.LAMPORTS_PER_SOL * amount
    })
    transaction.add(sendSolInstruction);
    const signature = Web3.sendAndConfirmTransaction (
        connection,
        transaction,
        [senderKeypair]
    );
}