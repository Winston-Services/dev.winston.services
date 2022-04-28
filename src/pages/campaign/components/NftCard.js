import React from 'react';

import { FavoriteBorder } from '@mui/icons-material';
import {
  Card,
  Grid,
  Chip,
  IconButton,
  Typography,
  AvatarGroup,
  Avatar,
} from '@mui/material';
import { PropTypes } from 'prop-types';
// import { useNavigate } from 'react-router-dom';

function NftCard({ NftData }) {
  //   const navigate = useNavigate();
  return (
    <Grid container spacing={3}>
      {NftData.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} width="100%">
          <Card elevation={0} sx={{ position: 'relative' }}>
            <img src={item.image} alt="" width="100%" />
            <Grid className="product-chip">
              <Chip variant="filled" label={item.category} />
            </Grid>
            <Grid px={2} py={1.5}>
              <Grid
                display={'flex'}
                justifyContent="space-between"
                alignItems={'center'}
              >
                <Typography sx={{ fontSize: '20px' }}>{item.title}</Typography>
                <IconButton>
                  <FavoriteBorder />
                </IconButton>
              </Grid>
              <Typography variant="subtitle2">{item.subtitle}</Typography>
              <Grid
                container
                display={'flex'}
                gap={1}
                alignItems="center"
                my={1.5}
              >
                <Typography variant="h5">{'$' + item.fundRaised}</Typography>
                <Typography variant="subtitle2" sx={{ color: '#FFD215' }}>
                  Funds Raised
                </Typography>
              </Grid>
              <Grid
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={1}
              >
                <AvatarGroup>
                  {item.donners.map((donner) => (
                    <Avatar
                      className="borderNone"
                      key={donner.name}
                      alt={donner.name}
                      src={donner.avatar}
                    />
                  ))}
                </AvatarGroup>
                <Typography>{item.donners.length + 'donners'} </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

NftCard.propTypes = {
  NftData: PropTypes.array,
};

export default NftCard;
