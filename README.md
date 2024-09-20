# Getting Started
Welcome to Winston; Winston is your personal assistant to all things blockchain.

## This Dapp and WebApp is a combination of tools to help the common person get started in blockchain technology.

### What's in the App?

We have some of the basic stuff you would expect.

* Cross Chain Swap.
* Cross Chain NFT Marketplace
* Cross Chain Faucet
* Cross Chain Airdrop Contract
* Cross Chain Crowd Funding
* Cross Chain Academy
* Cross Chain Wallet/Dashboard
* Cross Chain Explorer
* Cross Chain News
* Cross Chain Tech Docs
* Cross Chain Asset Wizard


### Build Instructions
The Dapp uses electron to build cross platform desktop applications.

To begin the build process fork this repository, and run the following commands.

Install the node modules.
`npm ci`

Build the UI components.
`npm run build`

Run the UI components.
`npm run start`

Run the desktop packaging process.
#### Windows
`npm run electron:package:win`

#### Linux
`npm run electron:package:linux`

#### MacOS
`npm run electron:package:mac`
