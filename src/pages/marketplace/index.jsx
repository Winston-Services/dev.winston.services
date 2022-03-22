import * as React from 'react';
import {
  Typography,
  Button,
  TextField,
  Grid,
  InputAdornment,
  Badge,
  Container,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import NftMarketPlace1 from '../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../assets/nft_marketplace_4.png';
import NftMarketPlace5 from '../../assets/nft_marketplace_5.png';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Filter from './components/Filter';
import FilterListIcon from '@mui/icons-material/FilterList';
import ProductCard from './components/ProductCard';
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
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Container>
      <Grid
        container
        rowSpacing={{ xs: 2, md: 5 }}
        columnSpacing={{ xs: 2, md: 2, lg: 4 }}
      >
        <Grid item md={4}>
          <Typography variant="h2">Marketplace</Typography>
        </Grid>
        <Grid item sm={12} md={8} display="flex" alignItems="center">
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
            <Grid item xs="12" md="auto">
              <Grid container columnSpacing={2}>
                <Grid item xs={7} md="auto">
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    startIcon={<ListIcon />}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    Recently Listed
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    fullWidth
                    sx={{ display: { xs: '', md: 'none' } }}
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
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Filter toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
        </Grid>
        <Grid item md={8}>
          <ProductCard items={items} />
        </Grid>
      </Grid>
    </Container>
  );
}
