import * as React from 'react';
import {
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  InputAdornment,
  CardActionArea,
  CardMedia,
  CardContent,
  Badge,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import NftMarketPlace1 from '../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../assets/nft_marketplace_4.png';
import NftMarketPlace5 from '../../assets/nft_marketplace_5.png';
// import { ReactComponent as BidBuyIcon } from '../../assets/bid_buy.svg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import FilterListIcon from '@mui/icons-material/FilterList';
const items = [
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
  {
    image: NftMarketPlace5,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace1,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
      <Grid item lg={4}>
        <Typography variant="h2">Marketplace</Typography>
      </Grid>
      <Grid item lg={8} display="flex" alignItems="center">
        <Grid container alignItems={'center'} spacing={3}>
          <Grid item flexGrow={1}>
            <TextField
              variant="standard"
              hiddenLabel
              fullWidth
              color="filled"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ListIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              Recently Listed
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={toggleDrawer}
              startIcon={<FilterListIcon />}
              endIcon={<Badge color="secondary" badgeContent={5} />}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4}>
        <Filter toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      </Grid>
      <Grid item lg={8}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item + index}>
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
                  {/* <div>
                    <Button
                      startIcon={<BidBuyIcon />}
                      onClick={() => {
                        navigate('/marketplace/product-details');
                      }}
                    >
                      Bid | Buy
                    </Button>
                  </div> */}
                  <CardContent sx={{ pb: 3 }}>
                    <Grid container rowGap={1}>
                      <Grid
                        item
                        xs
                        display="flex"
                        justifyContent="space-between"
                        alignItems={'center'}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: '300' }}
                        >
                          #{item.id}
                        </Typography>
                        {/* <IconButton aria-label="delete"> */}
                        <FavoriteBorderIcon />
                        {/* </IconButton> */}
                      </Grid>
                      <Grid
                        item
                        xs
                        display="flex"
                        justifyContent="space-between"
                        alignItems={'center'}
                      >
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="h5">${item.price}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs
                        display="flex"
                        justifyContent="space-between"
                        alignItems={'center'}
                      >
                        <div>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: '300' }}
                          >
                            Start BID
                          </Typography>
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
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: '300' }}
                          >
                            End BID in
                          </Typography>
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
      </Grid>
    </Grid>
  );
}
