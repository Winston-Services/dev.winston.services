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
  AvatarGroup,
  Avatar,
  Chip,
  Link,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ position: 'relative' }} elevation={0}>
      <Box>
        <CardMedia
          component="img"
          height="300px"
          image={item.image}
          alt="green iguana"
        />
      </Box>
      <Grid className="product-chip">
        <Chip variant="filled" label={item.category} />
      </Grid>

      <CardContent sx={{ pb: 3 }}>
        <Grid container rowGap={1}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
          >
            {/* <Typography variant="h6">{item.title}</Typography> */}
            <Link
              onClick={() => {
                navigate('/community-funding/community-details');
              }}
              variant="h6"
            >
              {item.title}
            </Link>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Grid>
          <Typography variant="subtitle2">{item.subtitle}</Typography>
          <Grid display={'flex'} alignItems="center" gap={2} mt={1}>
            <Typography variant="h5">${item.fundRaised}</Typography>
            <Typography variant="subtitle2" sx={{ color: '#FFD215' }}>
              Funds Raised
            </Typography>
          </Grid>
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
          <Typography>{item.donners.length} donners</Typography>
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
