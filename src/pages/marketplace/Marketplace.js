import * as React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List';
import { Typography, Button, Grid, Badge, Container } from '@mui/material';

import NftMarketPlace1 from '../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../assets/nft_marketplace_4.png';
import NftMarketPlace5 from '../../assets/nft_marketplace_5.png';
import AutoCompleteSearchBar from './../../components/common/AutoCompleteSearchBar';
import Filter from './components/Filter';
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
    id: 5162,
    name: 'Abc',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace3,
    id: 5173,
    name: 'Def',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace4,
    id: 5174,
    name: 'Ghi',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace5,
    id: 5185,
    name: 'Jkl',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace1,
    id: 5186,
    name: 'Mno',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
];

export default function Marketplace() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(items);

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
              <AutoCompleteSearchBar
                data={items}
                searchBy="name"
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSearchData={setSearchData}
              />
            </Grid>
            <Grid item xs={12} md="auto">
              <Grid container spacing={1}>
                <Grid item sx={{ xs: '100%', sm: 'auto' }}>
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
                <Grid item sx={{ xs: '100%', sm: 'auto' }}>
                  <Button
                    fullWidth
                    sx={{ display: { xs: '', md: 'none' } }}
                    variant="contained"
                    color="secondary"
                    onClick={toggleDrawer}
                    startIcon={<FilterListIcon />}
                    endIcon={
                      <Badge
                        color="secondary"
                        badgeContent={5}
                        sx={{ pl: 1 }}
                      />
                    }
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
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 2, md: 2, lg: 4 }}
          >
            {searchData && searchData.length !== 0 ? (
              searchData.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={item + index}>
                  <ProductCard item={item} />
                </Grid>
              ))
            ) : (
              <Typography textAlign={'center'} width="100%">
                No results for &apos;{searchInput}&apos;
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
