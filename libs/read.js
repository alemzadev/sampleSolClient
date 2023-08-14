
export async function getBalanceUsingWeb3(connection,address) {
    return connection.getBalance(address);
}

