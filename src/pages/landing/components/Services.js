import React from 'react';

import { Grid, Typography } from '@mui/material';

/* eslint-disable */
import chainExplorer from '../../../assets/chain_explorer.svg';
import masterNode from '../../../assets/master_node_hosting.svg';
import miningPool from '../../../assets/mining_pool_hosting.svg';
import nodeHosting from '../../../assets/node_hosting.svg';
/* eslint-enable */
import InfoCardType1 from '../../../components/info-cards/InfoCardType1';

export default function Services() {
  /* eslint-disable */
  let data = [
    {
      title: 'Winston',
      subTitle: 'Your personal assistant to all things blockchain.',
      description:
        'Winston is a personal assistant to all things blockchain. He can help you with your blockchain projects, and he can help you with your blockchain knowledge.',
      moreDescription:
        'Winston is a  Discord bot that can help you with your blockchain projects, with a wide range of blockchain features.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Winston Academy',
      subTitle: 'Learn about blockchain and cryptocurrency.',
      description:
        'Winston Academy offers comprehensive learning resources on blockchain and cryptocurrency.',
      moreDescription:
        'Explore a variety of courses and materials designed to enhance your understanding of blockchain technology and digital currencies at Winston Academy.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Winston Dashboard',
      subTitle: 'A multicore wallet and dashboard.',
      description:
        'A distinctive perspective on your blockchain assets, providing a unique tool for asset management.',
      moreDescription:
        'Winston Dashboard is a multicore wallet and dashboard. It allows you to manage your blockchain assets, and it allows you to learn about blockchain projects.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'Winston Rewards',
      subTitle: 'Earn rewards for participating in the community.',
      description:
        'Winston Rewards is a program that allows everyone to earn rewards for participating in the community driven rewards program.',
      moreDescription:
        'Winston is a symbol of those driven to support education and reward others who do the same.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'Winston Burn',
      subTitle: 'Burn your tokens to support the community.',
      description:
        'Burn your tokens to support the community. Each burn decreases the total supply of Winston increasing the value of the remaining Winston.',
      moreDescription:
        "Let's burn a passion for learning and reward others who do the same.",
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'NFT Marketplace',
      subTitle: "A multichain marketplace for NFT's.",
      description:
        'List your NFT collection assets to our multichain NFT marketplace, or find your next favorite one.',
      icon: masterNode,
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Chain Explorer',
      subTitle: 'Explore data across many blockchain networks.',
      description:
        'We have block explorers for 12 different cores currently and plan to increase that to many more as we grow.',
      moreDescription:
        'We also offer anyone who creates a new coin with Winston Services, the ability to have a block explorer hosted for their new coins.A hassle way to get a new project started.',
      icon: chainExplorer,
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Liquidity Mining',
      subTitle: 'Participate in liquidity mining across chains.',
      description:
        'Winston offers over 80 liquidity pools spanning 6 different networks, allowing for diverse and robust liquidity mining opportunities.',
      moreDescription:
        'Engage with our extensive network of liquidity pools to maximize your earnings and support the ecosystem. Our platform facilitates easy access to liquidity mining for newcomers and veterans alike.',
      icon: miningPool,
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'Community Funding',
      subTitle: 'Raise funds for your project.',
      description:
        'Fund projects using cryptocurrency. Engage with a community that supports innovation and growth.',
      moreDescription:
        'Our platform provides a decentralized way for creators to receive support directly through blockchain technology, ensuring transparency and security for all transactions.',
      icon: miningPool,
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'Coin Wizard',
      subTitle: 'Build your own coin or smart contract.',
      description:
        'Use our intuitive Coin Wizard to create your own cryptocurrency or smart contract with ease.',
      moreDescription:
        'Our wizard guides you through the process, ensuring you have all the tools necessary to launch your project successfully.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'Token Voting',
      subTitle: 'Have a say; Let your voice be heard.',
      description:
        'Participate in the governance of our platform by voting on various aspects of the platform.',
      moreDescription:
        'Your vote matters! Engage directly in the decision-making process and help shape the future of our services.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Token Listings',
      subTitle: 'Get your token listed on our platform.',
      description:
        'Increase your token’s visibility and trading volume by getting it listed on Winston.',
      moreDescription:
        'Our streamlined listing process ensures your token is available to a wide audience, enhancing liquidity and market presence.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'News and Updates',
      subTitle: 'Stay informed and contribute to the latest news.',
      description:
        'Access and contribute to real-time updates and news articles about the cryptocurrency world directly through our platform.',
      moreDescription:
        'Keep up with the fast-paced world of crypto to make informed decisions and share your insights with the latest information at your fingertips.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Whitepaper Library',
      subTitle:
        'Explore our collection of crypto whitepapers.',
      description:
        'Dive deep into the technical details and use cases of various cryptocurrencies with our comprehensive whitepaper library. Add your own research to help the community grow.',
      moreDescription:
        'Gain insights and expand your knowledge with detailed documents that explain the mechanics and visions of different crypto projects. Your contributions can help others understand complex topics.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },

    {
      title: 'Shopping Cart',
      subTitle: 'Manage your purchases and transactions.',
      description:
        'Easily add and manage your desired crypto assets in a secure shopping cart, ready for checkout whenever you are.',
      moreDescription:
        'Our intuitive shopping cart interface allows for seamless additions and removals of products, ensuring a smooth transaction process.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Cross Chain Order Book Swap',
      subTitle: 'Swap assets across different blockchains.',
      description:
        'Utilize our cross chain order book to swap assets seamlessly between different blockchains without the need for intermediaries.',
      moreDescription:
        'Our platform supports a variety of blockchains, enabling secure, fast, and efficient cross-chain transactions.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Winston Issue Tracking',
      subTitle: 'Submit and resolve platform issues for bounties.',
      description:
        "Engage with Wiston's issue tracking system to submit or resolve issues. Earn bounties by contributing to solutions that enhance system functionality.",
      moreDescription:
        'Winston not only helps you manage and track issues but also rewards your contributions with bounties, fostering a proactive community of problem solvers.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Community Support',
      subTitle: 'Resolve community issues and earn rewards.',
      description:
        'Engage with our community support platform to report or resolve issues and earn rewards for your contributions.',
      moreDescription:
        'Our community-driven support system ensures that every issue is addressed promptly while rewarding those who help in resolving them.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Winston Chat',
      subTitle: 'P2P Socket Network Messaging.',
      description:
        'Connect directly with other users via our P2P socket network messaging system, offering a straightforward communication channel.',
      moreDescription:
        'Winston Chat operates on a peer-to-peer network, enabling real-time communication without centralized storage, enhancing user interaction efficiency.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Peer to Peer Crypto Payments',
      subTitle: 'Seamless and secure transactions.',
      description:
        'Send and receive payments directly with other users without intermediaries, using our secure private network payment system.',
      moreDescription:
        'Our platform supports instant P2P crypto transactions, allowing you to transfer cryptocurrency securely and efficiently on a private network.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
  ];
  /* eslint-enable */
  return (
    <Grid
      container
      sx={{
        mt: { xs: 5, md: 6 },
        pt: { xs: 5, md: 6 },
        mb: { xs: 10, sm: 16 },
      }}
    >
      <Grid item xs={12}>
        <Typography id="servicesTitle" variant="h2" sx={{ mb: 3 }}>
          Services
        </Typography>
        <Typography textAlign="left" sx={{ mb: 8, fontSize: 'xx-large' }}>
          Winston love&apos;s crypto. We want you to enjoy crypto as well. We
          are proud to include these great features in our service.
        </Typography>
      </Grid>
      <InfoCardType1 data={data} />
    </Grid>
  );
}
