---
id: get-transactions
title: Get Wallet Transactions
---

# How to Get All Transactions of a Wallet Address Using Project Zero's Transactions API

Project Zero's Transactions API allows you to retrieve the entire transaction history of any wallet address on supported blockchains. This guide will show you how to make direct HTTP requests to fetch all transactions associated with a specific wallet address.

## Prerequisites

Before you start, ensure you have the following:

1. **Project Zero Account**: Sign up at [Project Zero's website](https://projectzero.io) if you haven't already.
2. **API Key**: Obtain your API key from the Project Zero dashboard.
3. **Node.js**: Make sure Node.js is installed in your development environment.
4. **Axios or Request Library** (optional): For making HTTP requests. We'll use Axios in this tutorial.

## Step 1: Set Up Your Project

Create a new project directory and initialize it:

```bash
mkdir wallet-transaction-history
cd wallet-transaction-history
npm init -y
```

Next, install Axios to help with making HTTP requests:

```bash
npm install axios
```

Create a file named `index.js` where we’ll write the code to get the transaction history.

## Step 2: Write the Code to Get All Transactions

In your `index.js` file, import Axios and write the function to make an HTTP GET request to Project Zero’s Transactions API.

```javascript
const axios = require('axios');

async function getWalletTransactions(walletAddress) {
    const apiKey = 'your_project_zero_api_key';
    const url = `https://api.projectzero.io/eth/wallets/${walletAddress}/transactions`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        console.log(`Transactions of ${walletAddress}:`, response.data);
    } catch (error) {
        console.error('Error fetching transactions:', error.response ? error.response.data : error.message);
    }
}

const walletAddress = '0xYourWalletAddressHere';
getWalletTransactions(walletAddress);
```

Replace `'your_project_zero_api_key'` with your actual API key from the Project Zero dashboard, and `'0xYourWalletAddressHere'` with the wallet address for which you want to fetch the transaction history.

## Step 3: Run the Script

To retrieve all transactions of the wallet, run the script with Node.js:

```bash
node index.js
```

If everything is set up correctly, you should see the transaction history printed in the console.

## Example Response

The output should look something like this:

```json
{
    "transactions": [
        {
            "hash": "0xabcdef...",
            "from": "0xYourWalletAddressHere",
            "to": "0xRecipientAddressHere",
            "value": "1000000000000000000", // in Wei
            "blockNumber": 123456,
            "timestamp": 1625256000,
            "gasUsed": 21000,
            "gasPrice": "20000000000"
        },
        {
            "hash": "0x123456...",
            "from": "0xAnotherWalletAddress",
            "to": "0xYourWalletAddressHere",
            "value": "500000000000000000", // in Wei
            "blockNumber": 123457,
            "timestamp": 1625257000,
            "gasUsed": 21000,
            "gasPrice": "25000000000"
        }
        // More transactions...
    ]
}
```

- `transactions`: An array of transaction objects associated with the wallet address.
- `hash`: The transaction hash.
- `from`: The sender’s wallet address.
- `to`: The recipient’s wallet address.
- `value`: The amount of cryptocurrency transferred (in Wei).
- `blockNumber`: The block number in which the transaction was included.
- `timestamp`: The Unix timestamp of the transaction.
- `gasUsed`: The amount of gas used for the transaction.
- `gasPrice`: The price of gas (in Wei) at the time of the transaction.

## Conclusion

You’ve successfully retrieved all transactions associated with a wallet using a direct HTTP request to Project Zero's Transactions API. This method is straightforward and allows you to integrate comprehensive transaction histories into your dApps.

For more advanced use cases and additional API endpoints, refer to the full [Project Zero documentation](#).