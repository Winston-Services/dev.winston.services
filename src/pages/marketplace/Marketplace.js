import * as React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List';
import {
  Typography,
  Button,
  Grid,
  Badge,
  Container,
  Chip,
  Switch,
} from '@mui/material';

import donner1 from '../../assets/donner1.svg';
import donner2 from '../../assets/donner2.svg';
import donner3 from '../../assets/donner3.svg';
import donner4 from '../../assets/donner4.svg';
import NftMarketPlace1 from '../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../assets/nft_marketplace_4.png';
import NftMarketPlace5 from '../../assets/nft_marketplace_5.png';
import AutoCompleteSearchBar from './../../components/common/AutoCompleteSearchBar';
import Filter from './../../components/common/Filter';
import ProductCard from './components/ProductCard';
const items = [
  {
    image: NftMarketPlace1,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
    donners: [
      {
        name: 'Donner 1',
        avatar: donner1,
      },
      {
        name: 'Donner 2',
        avatar: donner2,
      },
      {
        name: 'Donner 3',
        avatar: donner3,
      },
      {
        name: 'Donner 4',
        avatar: donner4,
      },
    ],
  },
  {
    image: NftMarketPlace2,
    id: 5162,
    name: 'Abc',
    price: 59,
    startBid: 15,
    endBidIn: 5,
    donners: [
      {
        name: 'Donner 1',
        avatar: donner1,
      },
      {
        name: 'Donner 2',
        avatar: donner2,
      },
      {
        name: 'Donner 3',
        avatar: donner3,
      },
      {
        name: 'Donner 4',
        avatar: donner4,
      },
    ],
  },
  {
    image: NftMarketPlace3,
    id: 5173,
    name: 'Def',
    price: 59,
    startBid: 15,
    endBidIn: 5,
    donners: [
      {
        name: 'Donner 1',
        avatar: donner1,
      },
      {
        name: 'Donner 2',
        avatar: donner2,
      },
      {
        name: 'Donner 3',
        avatar: donner3,
      },
      {
        name: 'Donner 4',
        avatar: donner4,
      },
    ],
  },
  {
    image: NftMarketPlace4,
    id: 5174,
    name: 'Ghi',
    price: 59,
    startBid: 15,
    endBidIn: 5,
    donners: [
      {
        name: 'Donner 1',
        avatar: donner1,
      },
      {
        name: 'Donner 2',
        avatar: donner2,
      },
      {
        name: 'Donner 3',
        avatar: donner3,
      },
      {
        name: 'Donner 4',
        avatar: donner4,
      },
    ],
  },
  {
    image: NftMarketPlace5,
    id: 5185,
    name: 'Jkl',
    price: 59,
    startBid: 15,
    endBidIn: 5,
    donners: [
      {
        name: 'Donner 1',
        avatar: donner1,
      },
      {
        name: 'Donner 2',
        avatar: donner2,
      },
      {
        name: 'Donner 3',
        avatar: donner3,
      },
      {
        name: 'Donner 4',
        avatar: donner4,
      },
    ],
  },
  {
    image: NftMarketPlace1,
    id: 5186,
    name: 'Mno',
    price: 59,
    startBid: 15,
    endBidIn: 5,
    donners: [
      {
        name: 'Donner 1',
        avatar: donner1,
      },
      {
        name: 'Donner 2',
        avatar: donner2,
      },
      {
        name: 'Donner 3',
        avatar: donner3,
      },
      {
        name: 'Donner 4',
        avatar: donner4,
      },
    ],
  },
];

const categoriesFilter = [
  'Art',
  'Collectibles',
  'Domain Names',
  'Music',
  'Photography',
  'Sports',
  'Trading Cards',
  'Utility',
];

const onSaleInFilter = [
  'ETH',
  'WETH',
  '$BASED',
  '3$DG',
  '0xBTC',
  '1337',
  '1MT',
  '2XDN',
  'ABST',
];

const filterPanels = [
  {
    summaryText: 'Price',
    summaryCount: 5,
    detailsComponent: <Typography>Price Filter Coming Soon...!</Typography>,
  },
  {
    summaryText: 'Collection',
    summaryCount: 0,
    detailsComponent: <Typography>Price Filter Coming Soon...!</Typography>,
  },
  {
    summaryText: 'Categories',
    summaryCount: 10,
    detailsComponent: (
      <>
        {categoriesFilter.map((item, index) => (
          <Chip
            variant="filled"
            key={item + index}
            label={item}
            sx={{ mr: 1.25, mt: 1.25 }}
          />
        ))}
      </>
    ),
  },
  {
    summaryText: 'Chain',
    summaryCount: 100,
    detailsComponent: <Typography>Price Filter Coming Soon...!</Typography>,
  },
  {
    summaryText: 'On sale in',
    summaryCount: 10000,
    detailsComponent: (
      <>
        {onSaleInFilter.map((item) => (
          <Grid
            key={item}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>{item}</Typography>
            <Switch />
          </Grid>
        ))}
      </>
    ),
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
    <Container maxWidth={'xl'}>
      <Grid
        container
        rowSpacing={{ xs: 2, md: 5 }}
        columnSpacing={{ xs: 2, md: 2, lg: 4 }}
      >
        <Grid item xl={3}>
          <Typography variant="h2">Marketplace</Typography>
        </Grid>
        <Grid item sm={12} xl={9} display="flex" alignItems="center">
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
        <Grid item xl={3}>
          <Filter
            toggleDrawer={toggleDrawer}
            openDrawer={openDrawer}
            filterPanels={filterPanels}
          />
        </Grid>
        <Grid item xl={9}>
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
