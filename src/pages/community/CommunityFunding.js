import React from 'react';

import { ExpandMoreOutlined, ArrowRight } from '@mui/icons-material/';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CommunityFundingIcon from './../../assets/community_funding_icon.svg';
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
import CommunityCard from './components/CommunityCard';

function CommunityFunding() {
  const navigate = useNavigate();
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
      <Grid container display={'flex'} alignItems="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" mb={6.25}>
            Do you really have a creative idea?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/campaign')}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            Start Campaign
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={CommunityFundingIcon} width="100%" />
        </Grid>
      </Grid>

      <Grid mt={{ xs: 6, md: 12 }}>
        <Grid
          display={'flex'}
          justifyContent={'space-between'}
          alignItems="center"
        >
          <Typography variant="h3">Trending Campaign</Typography>
          <Grid display={{ xs: 'none', sm: 'block' }}>
            <Button endIcon={<ExpandMoreOutlined />}>View more</Button>
          </Grid>
        </Grid>
        <Grid
          container
          mt={2}
          rowSpacing={2}
          columnSpacing={{ xs: 2, md: 2, lg: 4 }}
        >
          {trendingItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item + index}>
              <CommunityCard item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid display={{ xs: 'block', sm: 'none' }} mt={3}>
          <Button
            variant="contained"
            sx={{ width: '100%' }}
            endIcon={<ArrowRight />}
          >
            View more
          </Button>
        </Grid>
      </Grid>
      <Grid mt={{ xs: 6, md: 12 }}>
        <Grid display={'flex'} justifyContent={'space-between'}>
          <Typography variant="h3">New Campaign</Typography>
          <Grid display={{ xs: 'none', sm: 'block' }}>
            <Button endIcon={<ExpandMoreOutlined />}>View more</Button>
          </Grid>
        </Grid>
        <Grid
          container
          mt={2}
          rowSpacing={2}
          columnSpacing={{ xs: 2, md: 2, lg: 4 }}
        >
          {newCampaignItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item + index}>
              <CommunityCard item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid display={{ xs: 'block', sm: 'none' }} mt={3}>
          <Button
            variant="contained"
            sx={{ width: '100%' }}
            endIcon={<ArrowRight />}
          >
            View more
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CommunityFunding;
