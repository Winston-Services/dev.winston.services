import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
  AvatarGroup,
  Avatar,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import doner1 from './../../../assets/doner1.svg';
import doner2 from './../../../assets/doner2.svg';
import doner3 from './../../../assets/doner3.svg';
import doner4 from './../../../assets/doner4.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card className="nft-container" elevation={0}>
      <Box className="hover-nft-button-container">
        <CardMedia
          component="img"
          height="300px"
          image={item.image}
          alt="green iguana"
        />
        <Button
          fullWidth
          className="hover-nft-button"
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 0 }}
          onClick={() => {
            navigate('/marketplace/product-details');
          }}
        >
          Buy
        </Button>
      </Box>

      <CardContent sx={{ pb: 3 }}>
        <Grid container rowGap={1}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Typography variant="subtitle2">#{item.id}</Typography>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="h5">${item.price}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Grid>
              <Typography variant="subtitle2">Start BID</Typography>
              <Typography mt={'-5px'} variant="subtitle1">
                ${item.startBid}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle2">End BID in</Typography>
              <Typography mt={'-5px'} variant="subtitle1">
                {item.endBidIn} Days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <AvatarGroup>
            <Avatar alt="Remy Sharp" src={doner1} />
            <Avatar alt="Travis Howard" src={doner2} />
            <Avatar alt="Agnes Walker" src={doner3} />
            <Avatar alt="Trevor Henderson" src={doner4} />
          </AvatarGroup>
          <Typography>{item.doners}</Typography>
        </Grid>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;
