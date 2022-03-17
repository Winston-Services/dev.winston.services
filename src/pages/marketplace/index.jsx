import * as React from 'react';
import {
  Typography,
  Paper,
  Button,
  TextField,
  Switch,
  Badge,
  useMediaQuery,
  IconButton,
  Grid,
  Card,
  InputAdornment,
  CardActionArea,
  CardMedia,
  CardContent,
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
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import { useNavigate } from 'react-router-dom';

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

export default function Index() {
  const matches = useMediaQuery('(min-width:600px)');
  // const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState('panel1');
  // const [openDrawer, setOpenDrawer] = React.useState(false);

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
  const toggleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    // setOpenDrawer(open);
  };

  // const list = () => <Box role="presentation">{filter()}</Box>;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4}>
        <Paper elevation={0} className="rounded">
          {filter()}
        </Paper>
      </Grid>
      <Grid item lg={8}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item + index}>
              <Card elevation={0} className="rounded">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300px"
                    image={item.image}
                    alt="green iguana"
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
