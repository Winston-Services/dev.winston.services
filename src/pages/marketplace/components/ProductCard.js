import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

// import donner1 from './../../../assets/donner1.svg';
// import donner2 from './../../../assets/donner2.svg';
// import donner3 from './../../../assets/donner3.svg';
// import donner4 from './../../../assets/donner4.svg';

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
        {item.donners && (
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
              {/* <Avatar alt="Remy Sharp" src={donner1} />
              <Avatar alt="Travis Howard" src={donner2} />
              <Avatar alt="Agnes Walker" src={donner3} />
              <Avatar alt="Trevor Henderson" src={donner4} /> */}
            </AvatarGroup>
            <Typography>{item.donners.length} donners</Typography>
          </Grid>
        )}
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;
