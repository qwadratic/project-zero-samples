---
slug: /
id: tutorial-defi-tracker
title: DeFi Portfolio Tracker
---

# Building a DeFi Portfolio Tracker with Project Zero

## Introduction

In the world of decentralized finance (DeFi), building a robust portfolio tracker that provides accurate and real-time data is crucial for both developers and end-users. Traditionally, extracting blockchain data and ensuring its accuracy has been a complex and resource-intensive task. Developers often grapple with rate-limited RPC endpoints, expensive infrastructure, and the complexities of handling chain reorganizations.

Project Zero simplifies this process by offering two key products:

1. **Streaming and Block Functions**: Delivering raw and transformed blockchain data directly to your preferred tools.
2. **Rich APIs**: Providing ready-to-consume data with full context, ideal for front-end applications.

In this tutorial, we’ll demonstrate how to build a DeFi Portfolio Tracker using React and Project Zero’s Rich APIs. This combination will not only streamline data extraction but also enable you to deliver a highly responsive and reliable user experience.

## Prerequisites

Before we dive into the implementation, ensure you have the following:

- Basic understanding of JavaScript and React.
- Node.js installed on your machine.
- A Project Zero account (sign up [here](#)).
- Access to an Ethereum wallet with some ETH and Tokens (e.g., MetaMask).

## Step 1: Setting Up the React Project

First, let's set up our React environment. Open your terminal and run the following commands:

```bash
npx create-react-app defi-portfolio-tracker
cd defi-portfolio-tracker
npm install axios web3 dotenv
```

This will create a new React project, initialize the environment, and install the necessary dependencies.

Next, create a `.env` file in the root of your project to securely store your API keys and environment variables:

```
REACT_APP_PROJECT_ZERO_API_KEY=your_project_zero_api_key
REACT_APP_ETHEREUM_NETWORK=mainnet
```

## Step 2: Using Rich APIs in React

Project Zero’s Rich APIs offer context-rich, pre-processed information that is ready to be displayed in your React application. We’ll use these APIs to fetch and display wallet holdings and transactions.

### Integrating the Wallet API

The Wallet API is perfect for retrieving the holdings of a particular wallet address, including token balances and other relevant metadata.

1. **Create a Function to Fetch Wallet Data**:

   In your React project, create a new file `src/api.js` and add the following code:

   ```javascript
   import axios from 'axios';

   export const getWalletData = async (walletAddress) => {
       try {
           const response = await axios.get(`https://api.projectzero.io/eth/wallet/${walletAddress}`, {
               headers: {
                   'Authorization': `Bearer ${process.env.REACT_APP_PROJECT_ZERO_API_KEY}`
               }
           });
           return response.data;
       } catch (error) {
           console.error('Error fetching wallet data:', error);
           throw error;
       }
   };
   ```

2. **Display the Data in Your React Component**:

   Create a new component `src/components/WalletData.js` to display the wallet data:

   ```javascript
   import React, { useState, useEffect } from 'react';
   import { getWalletData } from '../api';

   const WalletData = ({ walletAddress }) => {
       const [walletData, setWalletData] = useState(null);

       useEffect(() => {
           const fetchData = async () => {
               try {
                   const data = await getWalletData(walletAddress);
                   setWalletData(data);
               } catch (error) {
                   console.error('Error fetching wallet data:', error);
               }
           };

           fetchData();
       }, [walletAddress]);

       if (!walletData) return <p>Loading...</p>;

       return (
           <div>
               <h3>Wallet Holdings for {walletAddress}</h3>
               <pre>{JSON.stringify(walletData, null, 2)}</pre>
           </div>
       );
   };

   export default WalletData;
   ```

   This component fetches and displays the wallet holdings when the component is mounted.

### Integrating the Transactions API

To display recent transactions for a given wallet, we can use the Transactions API.

1. **Fetch Transaction Data**:

   Add another function to `src/api.js`:

   ```javascript
   export const getTransactionData = async (walletAddress) => {
       try {
           const response = await axios.get(`https://api.projectzero.io/eth/transactions/${walletAddress}`, {
               headers: {
                   'Authorization': `Bearer ${process.env.REACT_APP_PROJECT_ZERO_API_KEY}`
               }
           });
           return response.data;
       } catch (error) {
           console.error('Error fetching transaction data:', error);
           throw error;
       }
   };
   ```

2. **Display Transactions in a React Component**:

   Create another component `src/components/TransactionData.js`:

   ```javascript
   import React, { useState, useEffect } from 'react';
   import { getTransactionData } from '../api';

   const TransactionData = ({ walletAddress }) => {
       const [transactions, setTransactions] = useState(null);

       useEffect(() => {
           const fetchData = async () => {
               try {
                   const data = await getTransactionData(walletAddress);
                   setTransactions(data);
               } catch (error) {
                   console.error('Error fetching transaction data:', error);
               }
           };

           fetchData();
       }, [walletAddress]);

       if (!transactions) return <p>Loading...</p>;

       return (
           <div>
               <h3>Recent Transactions for {walletAddress}</h3>
               <pre>{JSON.stringify(transactions, null, 2)}</pre>
           </div>
       );
   };

   export default TransactionData;
   ```

This component will display recent transactions when the component is mounted.

## Step 3: Bringing It All Together

Now that we have the components to display wallet data and transactions, let's bring them together in our main `App.js` component.

1. **Update `src/App.js`**:

   ```javascript
   import React, { useState } from 'react';
   import WalletData from './components/WalletData';
   import TransactionData from './components/TransactionData';

   function App() {
       const [walletAddress, setWalletAddress] = useState('');

       const handleInputChange = (e) => {
           setWalletAddress(e.target.value);
       };

       return (
           <div className="App">
               <h1>DeFi Portfolio Tracker</h1>
               <input
                   type="text"
                   value={walletAddress}
                   onChange={handleInputChange}
                   placeholder="Enter wallet address"
               />
               {walletAddress && (
                   <>
                       <WalletData walletAddress={walletAddress} />
                       <TransactionData walletAddress={walletAddress} />
                   </>
               )}
           </div>
       );
   }

   export default App;
   ```

2. **Run Your Application**:

   Start your React application:

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000`. You should see an input field where you can enter a wallet address. Once entered, the application will display the wallet holdings and recent transactions using Project Zero’s APIs.

## Final Thoughts

By using Project Zero’s Rich APIs, you can build a DeFi Portfolio Tracker that is both efficient and powerful. Rich APIs provide ready-to-use information that enhances the developer experience.

### Benefits of Using Project Zero

- **Data Consistency**: Ensure your application displays accurate and consistent blockchain data, regardless of chain reorganizations.
- **Cost and Time Efficiency**: Significantly reduce the overhead of maintaining your own infrastructure or dealing with rate-limited RPC endpoints.
- **Ease of Use**: Rich APIs are designed for simplicity, providing all the data your front-end needs without the complexity of raw blockchain parsing.


## Conclusion

Leveraging Project Zero not only accelerates development but also provides a competitive edge. With real-time and contextual data at your fingertips, your DeFi Portfolio Tracker can quickly gain adoption among users looking for reliable and responsive tools in the DeFi space. 

Start building today and see the difference Project Zero can make in your development process.

For more detailed documentation, visit [Project Zero Docs](#) and explore all the capabilities that Project Zero has to offer.