import React from 'react';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Button, Container, Grid, Typography } from '@mui/material';

import NftMarketPlace1 from '../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../assets/nft_marketplace_4.png';
import { ReactComponent as CommunityFundingIcon } from './../../assets/community_funding_icon.svg';
import ProductCard from './../marketplace/components/ProductCard';

function index() {
  const trendingItems = [
    {
      image: NftMarketPlace1,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
    {
      image: NftMarketPlace2,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
    {
      image: NftMarketPlace3,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
    {
      image: NftMarketPlace4,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
  ];

  const newCampaignItems = [
    {
      image: NftMarketPlace1,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
    {
      image: NftMarketPlace2,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
    {
      image: NftMarketPlace3,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
    {
      image: NftMarketPlace4,
      id: 5161,
      name: 'PsychoMolly',
      price: 59,
      startBid: 15,
      endBidIn: 5,
    },
  ];
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid container item display={'flex'} alignItems="center">
          <Grid item md={6} lg={6}>
            <Typography variant="h2" mb={6.25}>
              Do you really have a creative idea?
            </Typography>
            <Button variant="contained" color="secondary">
              Start Campaign
            </Button>
          </Grid>
          <Grid item md={6} lg={6}>
            <CommunityFundingIcon />
          </Grid>
        </Grid>

        <Grid container item>
          <Grid
            item
            sm={12}
            lg={12}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Typography variant="h4">Trending Campain</Typography>
            <Button>
              <Typography>View more</Typography>
              <ExpandMoreOutlinedIcon />
            </Button>
          </Grid>
          <Grid
            container
            mt={4}
            rowSpacing={2}
            columnSpacing={{ xs: 2, md: 2, lg: 4 }}
          >
            {trendingItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={item + index}>
                <ProductCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item>
          <Grid
            item
            sm={12}
            lg={12}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Typography variant="h4">New Campaign</Typography>
            <Button>
              <Typography>View more</Typography>
              <ExpandMoreOutlinedIcon />
            </Button>
          </Grid>
          <Grid
            container
            mt={4}
            rowSpacing={2}
            columnSpacing={{ xs: 2, md: 2, lg: 4 }}
          >
            {newCampaignItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={item + index}>
                <ProductCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default index;
