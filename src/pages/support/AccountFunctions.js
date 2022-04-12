import React from 'react';

import { Container, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchBar from './components/SearchBar';

const data = [
  {
    question: 'Why do I need to verify my account?',
    answers: [
      'Verifying your account will allow users to gain full access to Winston.com NFT features, including buying and selling NFTs, applying to become a creator and self-minting NFTs on our platform, etc.',
    ],
  },
  {
    question: 'How do I verify my account?',
    answers: [
      'There are two ways to verify your account. We recommend you to connect your Crypto.com App account with your Crypto.com NFT account, but if you don’t have a Crypto.com App account, you can still verify yourself with your phone number. ',
      'Method 1: Connect your Winston.com NFT account to your Winston.com',
    ],
  },
  {
    question: 'What are the rules for Crypto.com NFT username?',
    answers: [
      'The username which you choose must not be: harmful, abusive, racially or ethnically offensive, sexually explicit, defamatory, infringing any intellectual property right or invasive of personal privacy rights. By creating an account on Crypto.com NFT, you agree that we maintain the full rights and discretion to change your username.',
    ],
  },
];

function AccountFunctions() {
  const navigate = useNavigate();
  return (
    <Container>
      <SearchBar />
      <Typography variant="subtitle1" mt={5}>
        <Link onClick={() => navigate('/support')}>Support</Link> / Account
        functions
      </Typography>
      <Typography variant="h3" mt={5}>
        Account Functions
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

export default AccountFunctions;
