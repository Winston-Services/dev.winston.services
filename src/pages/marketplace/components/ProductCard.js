import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid,
  Card,
  // CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card className="nft-container" elevation={0}>
      {/* <CardActionArea> */}
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
            <div>
              <Typography variant="subtitle2">Start BID</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: '-5px',
                }}
              >
                ${item.startBid}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle2">End BID in</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: '-5px',
                }}
              >
                {item.endBidIn} Days
              </Typography>
            </div>
          </Grid>
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
