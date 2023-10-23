# Decentralized Coffee Ordering Web Application

Welcome to the Decentralized Coffee Ordering Web Application! This project allows users to order coffee using Ethereum smart contracts and a React frontend.


## Overview

This application leverages Ethereum smart contracts to create a decentralized coffee ordering system. Users can place orders for coffee, and the orders are processed and tracked on the Ethereum blockchain. The frontend is built using Vite + React.

## Prerequisites

Before you get started, ensure you have the following tools and technologies installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager (usually comes with Node.js)
- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [Metamask](https://metamask.io/) - Ethereum wallet browser extension

## Getting Started

### Installation

1. Clone this repository:

   ```shell
   git clone https://github.com/yourusername/decentralized-coffee-app.git
   cd decentralized-coffee-app
   ```

2. Install project dependencies:

   ```shell
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and configure the following environment variables:

   - `REACT_APP_INFURA_API_KEY` - Your Infura API key
   - `REACT_APP_PRIVATE_KEY` - Your Ethereum wallet's private key (for deploying and interacting with contracts)

2. Compile and deploy your smart contracts using Hardhat. Update the deployment scripts in `hardhat.config.js` to match your contract deployment needs.

3. Configure Metamask to connect to your chosen Ethereum network (e.g., Ropsten or a local Hardhat network). Import the Ethereum wallet associated with the private key configured in your `.env` file.

## Usage

1. Start the React development server:

   ```shell
   npm start
   ```

2. Access the application in your web browser:

   ```shell
   http://localhost:3000
   ```

3. Use Metamask to connect to the Ethereum network.

4. Place coffee orders, and the status will be updated on the blockchain.

## Project Structure

The project structure is organized as follows:

- `contracts/` - Contains Ethereum smart contracts
- `frontend/` - The React frontend for the application
- `hardhat.config.js` - Configuration for the Hardhat development environment
- `scripts/` - Contains Hardhat scripts for deploying and interacting with contracts
- `test/` - Test scripts for the smart contracts

## Contributing

Contributions to this project are welcome. If you have suggestions, improvements, or feature requests, please create an issue or submit a pull request.

---

Happy hacking!
```
