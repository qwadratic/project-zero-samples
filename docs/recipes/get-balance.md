---
id: get-balance
title: Get Wallet Balance
---

# How to Get the Balance of a Wallet Using Project Zero's Wallet API

Project Zero's Wallet API allows you to retrieve the balance of any wallet address on supported blockchains with a simple HTTP request. This guide will walk you through how to make these requests.

## Prerequisites

Before you begin, ensure you have the following:

1. **Project Zero Account**: Sign up at [Project Zero's website](https://projectzero.io) if you haven't already.
2. **API Key**: Obtain your API key from the Project Zero dashboard.
3. **Node.js**: Ensure you have Node.js installed in your development environment.
4. **Axios or Request Library** (optional): For making HTTP requests. We'll use Axios in this tutorial.

## Step 1: Set Up Your Project

Create a new project directory and initialize it:

```bash
mkdir wallet-balance-checker
cd wallet-balance-checker
npm init -y
```

Next, install Axios to help with making HTTP requests:

```bash
npm install axios
```

Create a file named `index.js` where we’ll write the code to get the wallet balance.

## Step 2: Write the Code to Get Wallet Balance

In your `index.js` file, import Axios and write the function to make an HTTP GET request to Project Zero’s Wallet API.

```javascript
const axios = require('axios');

async function getWalletBalance(walletAddress) {
    const apiKey = 'your_project_zero_api_key';
    const url = `https://api.projectzero.io/eth/wallets/${walletAddress}/balance`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        console.log(`Balance of ${walletAddress}:`, response.data);
    } catch (error) {
        console.error('Error fetching wallet balance:', error.response ? error.response.data : error.message);
    }
}

const walletAddress = '0xYourWalletAddressHere';
getWalletBalance(walletAddress);
```

Replace `'your_project_zero_api_key'` with your actual API key from the Project Zero dashboard, and `'0xYourWalletAddressHere'` with the wallet address for which you want to check the balance.

## Step 3: Run the Script

To retrieve the balance of the wallet, run the script with Node.js:

```bash
node index.js
```

If everything is set up correctly, you should see the wallet balance printed in the console.

## Example Response

The output should look something like this:

```plaintext
Balance of 0xYourWalletAddressHere: {
    "balance": "12345678901234567890", // in Wei
    "formatted_balance": "12.345 ETH"
}
```

- `balance`: The raw balance in Wei (the smallest unit of Ether).
- `formatted_balance`: The balance converted into Ether (or the native token of the chain).

## Conclusion

You’ve now successfully retrieved the balance of a wallet using a direct HTTP request to Project Zero's Wallet API. This method provides a simple way to access wallet balances without needing a specialized SDK, making it easy to integrate real-time wallet data into your dApps.

For more advanced use cases and additional API endpoints, refer to the full [Project Zero documentation](#).
