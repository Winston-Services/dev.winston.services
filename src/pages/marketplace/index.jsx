import * as React from 'react';
import {
  Typography,
  Paper,
  Button,
  Box,
  TextField,
  Switch,
  Badge,
  useMediaQuery,
  IconButton,
  Grid,
} from '@mui/material';

import NftMarketPlace1 from '../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../assets/nft_marketplace_4.png';
import NftMarketPlace5 from '../../assets/nft_marketplace_5.png';
import { ReactComponent as BidBuyIcon } from '../../assets/bid_buy.svg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useNavigate } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';

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
const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    background: 'linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important',
    color: 'white',
    fontSize: 12,
    width: 25,
    height: 25,
    borderRadius: 25,
    left: 0,
  },
}));
const StyledBadgeWhite = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    background: 'white',
    color: 'black',
    fontSize: 12,
    width: 18,
    height: 18,
    borderRadius: 25,
  },
}));

export default function Index() {
  const matches = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState('panel1');
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(() => ({
    borderTop: '1px solid #483996',
    padding: '8px 30px 8px 30px',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '&.MuiAccordionSummary-root.Mui-expanded': {},
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: '0px 20px 20px 30px',
  }));

  const filter = () => {
    return (
      <>
        <Grid
          sx={{
            padding: '30px',
            display: { xs: 'flex' },
            justifyContent: { xs: 'space-between' },
            alignItems: { xs: 'center' },
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>
            Filter
          </Typography>
          {matches ? (
            ''
          ) : (
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(false)}
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          )}
        </Grid>
        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Grid display={'flex'} alignItems={'center'}>
                <Typography>Price</Typography>
                <StyledBadge badgeContent={2} />
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Price Filter Coming Soon...!</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Grid display={'flex'} alignItems={'center'}>
                <Typography>Collection</Typography>
                <StyledBadge badgeContent={1} />
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Collection Filter Coming Soon...!</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {categoriesFilter.map((item, index) => (
                <Button key={item + index} className="categories-filter-button">
                  {item}
                </Button>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>Chain</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Chain Filter Coming Soon...!</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Grid display={'flex'} alignItems={'center'}>
                <Typography>On sale in</Typography>
                <StyledBadge badgeContent={5} />
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              {onSaleInFilter.map((item, index) => (
                <Grid
                  key={item + index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>{item}</Typography>
                  <Switch />
                </Grid>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <Grid
          display="flex"
          justifyContent="center"
          sx={{ mt: '20px', padding: '20px' }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: '20px', width: { xs: '50%', sm: 'max-content' } }}
            onClick={toggleDrawer(false)}
          >
            Apply Filter
          </Button>
          <Button
            variant="outlined"
            sx={{ width: { xs: '50%', sm: 'max-content' } }}
            onClick={toggleDrawer(false)}
          >
            Clear
          </Button>
        </Grid>
      </>
    );
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => <Box role="presentation">{filter()}</Box>;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 2, md: 2, lg: 4 }}
      sx={{ mt: { xs: '20px', lg: '80px' } }}
    >
      <Grid item lg={4}>
        <Typography
          sx={{
            fontSize: { xs: '40px', lg: '50px' },
            fontWeight: { xs: '700', lg: '800' },
          }}
        >
          Marketplace
        </Typography>

        {matches && (
          <Grid sx={{ mt: '50px' }}>
            <Paper elevation={0} sx={{ borderRadius: '20px' }}>
              {filter()}
            </Paper>
          </Grid>
        )}
      </Grid>
      <Grid item lg={8}>
        <Grid
          display="flex"
          sx={{ display: { sm: 'flex' }, mt: { sm: '25px' } }}
        >
          <Box
            display="flex"
            alignItems="center"
            flexGrow="100"
            sx={{ p: '10px 25px', borderRadius: '25px', mr: { sm: '20px' } }}
            className="bgBlue"
          >
            <SearchIcon />

            <TextField
              placeholder="Search"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ ml: '10px' }}
            />
          </Box>
          <Grid display={'flex'} sx={{ mt: { xs: '20px', sm: '0px' } }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ListIcon />}
              sx={{ mr: { xs: '10px', sm: '0px' }, flexGrow: { xs: '100' } }}
              endIcon={<ArrowDropDownIcon />}
            >
              Recently Listed
            </Button>
            {matches ? null : (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={toggleDrawer(true)}
                  startIcon={<FilterListIcon />}
                  endIcon={<StyledBadgeWhite badgeContent={5} />}
                >
                  Filter &nbsp;&nbsp;&nbsp;
                </Button>
                <Drawer
                  anchor={'right'}
                  open={openDrawer}
                  onClose={toggleDrawer(false)}
                  className="filterDrawer"
                >
                  {list()}
                </Drawer>
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 2, md: 2, lg: 4 }}
          sx={{ mt: '10px' }}
        >
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item + index}>
              <Paper elevation={0} sx={{ borderRadius: '20px' }}>
                <div className="ftpContainer">
                  <img
                    src={item.image}
                    style={{ width: '100%', height: '300px' }}
                    className="brTop20 objectFitCover"
                  />
                  <div className="overlay"></div>
                  <div className="buyButton">
                    <Button
                      startIcon={<BidBuyIcon />}
                      onClick={() => {
                        navigate('marketplace/product-details');
                      }}
                    >
                      Bid | Buy
                    </Button>
                  </div>
                </div>
                <Grid sx={{ p: '0px 20px' }}>
                  <Grid
                    display="flex"
                    justifyContent="space-between"
                    sx={{ pt: '10px' }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: '300' }}>
                      #{item.id}
                    </Typography>
                    <FavoriteBorderIcon
                      sx={{ width: '16px', cursor: 'pointer' }}
                    />
                  </Grid>
                  <Grid
                    display="flex"
                    justifyContent="space-between"
                    sx={{ pt: '10px' }}
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: '22px', fontWeight: '700' }}>
                      ${item.price}
                    </Typography>
                  </Grid>
                  <Grid
                    display="flex"
                    justifyContent="space-between"
                    sx={{ pt: '16px', pb: '30px' }}
                  >
                    <div>
                      <Typography sx={{ fontSize: '12px', fontWeight: '400' }}>
                        Start BID
                      </Typography>
                      <Typography
                        sx={{ mt: '-5px', fontSize: '16px', fontWeight: '600' }}
                      >
                        {item.startBid}
                      </Typography>
                    </div>
                    <div>
                      <Typography sx={{ fontSize: '12px', fontWeight: '400' }}>
                        End BID in
                      </Typography>
                      <Typography
                        sx={{ mt: '-5px', fontSize: '16px', fontWeight: '600' }}
                      >
                        {item.endBidIn} Days
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
