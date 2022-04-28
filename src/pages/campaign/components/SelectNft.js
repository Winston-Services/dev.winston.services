import React from 'react';

import { Container, Typography, Grid } from '@mui/material';

import CommunityImage1 from './../../../assets/community_image1.png';
import donner1 from './../../../assets/donner1.svg';
import donner2 from './../../../assets/donner2.svg';
import donner3 from './../../../assets/donner3.svg';
import donner4 from './../../../assets/donner4.svg';
import NftCard from './NftCard';

const NftData = [
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
  {
    image: CommunityImage1,
    category: 'NFT Catagory',
    title: 'Flower pot',
    subtitle: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
    fundRaised: 20000,
    donners: [
      { name: 'Remy Sharp', avatar: donner1 },
      { name: 'Travis Howard', avatar: donner2 },
      { name: 'Agnes Walker', avatar: donner3 },
      { name: 'Trevor Henderson', avatar: donner4 },
    ],
  },
];

function SelectNft() {
  return (
    <Container>
      <Typography variant="h3">Select NFT</Typography>
      <Grid mt={4.2}>
        <NftCard NftData={NftData} />
      </Grid>
    </Container>
  );
}

export default SelectNft;
