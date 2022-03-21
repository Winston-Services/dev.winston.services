import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductCard({ items }) {
  const navigate = useNavigate();
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={item + index}>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image={item.image}
                alt="green iguana"
                onClick={() => {
                  navigate('/marketplace/product-details');
                }}
              />
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
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
ProductCard.propTypes = {
  items: PropTypes.node,
};

export default ProductCard;
