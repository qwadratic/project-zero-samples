---
id: recipe-3
title: Get ERC-20 Tokens Owned by a Wallet
---

# How to Get All ERC-20 Tokens Owned by a Wallet Using Project Zero's Token API

Project Zero's Token API allows you to retrieve all ERC-20 tokens owned by a specific wallet address on supported blockchains. This guide will walk you through making direct HTTP requests to fetch this token information.

## Prerequisites

Before you begin, ensure you have the following:

1. **Project Zero Account**: Sign up at [Project Zero's website](https://projectzero.io) if you haven't already.
2. **API Key**: Obtain your API key from the Project Zero dashboard.
3. **Node.js**: Ensure Node.js is installed in your development environment.
4. **Axios or Request Library** (optional): For making HTTP requests. We'll use Axios in this tutorial.

## Step 1: Set Up Your Project

Create a new project directory and initialize it:

```bash
mkdir wallet-erc20-tokens
cd wallet-erc20-tokens
npm init -y
```

Next, install Axios to help with making HTTP requests:

```bash
npm install axios
```

Create a file named `index.js` where we’ll write the code to get the ERC-20 tokens owned by a wallet.

## Step 2: Write the Code to Get All ERC-20 Tokens

In your `index.js` file, import Axios and write the function to make an HTTP GET request to Project Zero’s Token API.

```javascript
const axios = require('axios');

async function getERC20Tokens(walletAddress) {
    const apiKey = 'your_project_zero_api_key';
    const url = `https://api.projectzero.io/eth/wallets/${walletAddress}/tokens`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        console.log(`ERC-20 Tokens owned by ${walletAddress}:`, response.data);
    } catch (error) {
        console.error('Error fetching ERC-20 tokens:', error.response ? error.response.data : error.message);
    }
}

const walletAddress = '0xYourWalletAddressHere';
getERC20Tokens(walletAddress);
```

Replace `'your_project_zero_api_key'` with your actual API key from the Project Zero dashboard, and `'0xYourWalletAddressHere'` with the wallet address for which you want to fetch the ERC-20 tokens.

## Step 3: Run the Script

To retrieve all ERC-20 tokens owned by the wallet, run the script with Node.js:

```bash
node index.js
```

If everything is set up correctly, you should see the ERC-20 tokens owned by the wallet printed in the console.

## Example Response

The output should look something like this:

```json
{
    "tokens": [
        {
            "token_address": "0xTokenContractAddress1",
            "name": "Token Name 1",
            "symbol": "TOKEN1",
            "decimals": 18,
            "balance": "1000000000000000000" // in token's smallest unit
        },
        {
            "token_address": "0xTokenContractAddress2",
            "name": "Token Name 2",
            "symbol": "TOKEN2",
            "decimals": 18,
            "balance": "5000000000000000000" // in token's smallest unit
        }
        // More tokens...
    ]
}
```

- `tokens`: An array of token objects owned by the wallet address.
- `token_address`: The contract address of the ERC-20 token.
- `name`: The name of the token.
- `symbol`: The symbol or ticker of the token.
- `decimals`: The number of decimal places used by the token.
- `balance`: The balance of the token in its smallest unit.

## Conclusion

You’ve successfully retrieved all ERC-20 tokens owned by a wallet using Project Zero's Token API. This method provides a straightforward way to access detailed token information, allowing you to easily integrate token data into your dApps.

For more advanced use cases and additional API endpoints, refer to the full [Project Zero documentation](#).
