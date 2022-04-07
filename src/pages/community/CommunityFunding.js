import React from 'react';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Button, Container, Grid, Typography } from '@mui/material';

import { ReactComponent as CommunityFundingIcon } from './../../assets/community_funding_icon.svg';
import CommunityImage1 from './../../assets/community_image1.png';
import CommunityImage2 from './../../assets/community_image2.png';
import CommunityImage3 from './../../assets/community_image3.png';
import CommunityImage4 from './../../assets/community_image4.png';
import CommunityImage5 from './../../assets/community_image5.png';
import CommunityImage6 from './../../assets/community_image6.png';
import CommunityImage7 from './../../assets/community_image7.png';
import donner1 from './../../assets/donner1.svg';
import donner2 from './../../assets/donner2.svg';
import donner3 from './../../assets/donner3.svg';
import donner4 from './../../assets/donner4.svg';
import ProductCard from './components/ProductCard';

function index() {
  const trendingItems = [
    {
      image: CommunityImage1,
      title: 'Flower pot',
      category: 'NFT Catagory',
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
      image: CommunityImage2,
      title: 'Wolf',
      category: 'NFT Catagory',
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
      image: CommunityImage3,
      title: 'Flower pot',
      category: 'NFT Catagory',
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
      image: CommunityImage4,
      title: 'Flower pot',
      category: 'NFT Catagory',
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

  const newCampaignItems = [
    {
      image: CommunityImage5,
      title: 'Flower pot',
      category: 'NFT Catagory',
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
      image: CommunityImage6,
      title: 'Wolf',
      category: 'NFT Catagory',
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
      image: CommunityImage7,
      title: 'Flower pot',
      category: 'NFT Catagory',
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
      image: CommunityImage2,
      title: 'Flower pot',
      category: 'NFT Catagory',
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
