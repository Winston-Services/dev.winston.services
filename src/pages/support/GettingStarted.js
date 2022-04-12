import React from 'react';

import { Container, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchBar from './components/SearchBar';

const data = [
  {
    question: 'What are NFTs?',
    answers: [
      'NFT stands for a non-fungible token, which represents unique, irreplaceable assets that live on the blockchain. In-game assets, digital art, and collectible-related projects are the most prominent NFT use cases today.',
      'In contrast, fungible assets have units that are interchangeable with one another, such as bitcoin or the dollar bill.',
    ],
  },
  {
    question: 'What can I find on Winston NFT?',
    answers: [
      'You can find highly-curated NFTs from some of the most popular and well-regarded creators and brands in our drops – time-based events where such exclusive pieces of content are initially released to the public.',
      'Furthermore, you can also browse and purchase curated NFTs that were previously dropped, as well as a variety of other NFTs created by users in our open marketplace.',
      'NFTs on our platform have varying levels of rarity, depending on how many editions are minted. The fewer the number of editions, the rarer the NFT.',
    ],
  },
  {
    question: 'I need some help. How can I contact support?',
    answers: [
      'Most of your questions relating to Winston NFT can be found in this FAQ.  You can also reach out to us at contact@winston.com.',
    ],
  },
];

function GettingStarted() {
  const navigate = useNavigate();
  return (
    <Container>
      <SearchBar />
      <Typography variant="subtitle1" mt={5}>
        <Link onClick={() => navigate('/support')}>Support</Link> / Getting
        started
      </Typography>
      <Typography variant="h3" mt={5}>
        Getting started - NFT
      </Typography>

      {data.map((item) => (
        <Grid key={item.question}>
          <Typography variant="h5" mt={6.25}>
            {item.question}
          </Typography>
          {item.answers.map((answer) => (
            <Typography key={answer} variant="subtitle1" mt={2}>
              {answer}
            </Typography>
          ))}
        </Grid>
      ))}
    </Container>
  );
}

export default GettingStarted;
