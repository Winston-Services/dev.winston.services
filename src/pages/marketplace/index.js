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

import NftMarketPlace1 from '../../assets/NftMarketPlace1.png';
import NftMarketPlace2 from '../../assets/NftMarketPlace2.png';
import NftMarketPlace3 from '../../assets/NftMarketPlace3.png';
import NftMarketPlace4 from '../../assets/NftMarketPlace4.png';
import NftMarketPlace5 from '../../assets/NftMarketPlace5.png';
import { ReactComponent as BidBuyIcon } from '../../assets/BidBuyIcon.svg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import { makeStyles } from '@mui/styles';
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
const useStyles = makeStyles({
  root: {
    '& .MuiInput-root .MuiInput-notchedOutline': {
      borderColor: '#483996',
      color: 'white',
    },
    '&:hover .MuiInput-root .MuiInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInput-root.Mui-focused .MuiInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInput-input': {
      color: 'white',
    },
    '&:hover .MuiInput-input': {
      color: 'white',
    },
    '& .MuiInput-root.Mui-focused .MuiInput-input': {
      color: 'white',
    },
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'white',
    },
  },
});

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    background: 'linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important',
    color: 'white',
    fontSize: 14,
    fontWeight: 800,
    width: 30,
    height: 30,
    borderRadius: 25,
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
  const classes = useStyles();
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

  const AccordionSummary = matches
    ? styled((props) => (
        <MuiAccordionSummary
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: '0.9rem', color: 'white' }}
            />
          }
          {...props}
        />
      ))(() => ({
        backgroundColor: '#31256C',
        borderTop: '1px solid #483996',
        padding: '8px 30px 8px 30px',
        color: 'white',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '&.MuiAccordionSummary-root.Mui-expanded': {
          backgroundColor: '#382b78 !important',
        },
      }))
    : styled((props) => (
        <MuiAccordionSummary
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: '0.9rem', color: 'white' }}
            />
          }
          {...props}
        />
      ))(() => ({
        backgroundColor: '#271D5A',
        borderTop: '1px solid #483996',
        padding: '8px 30px 8px 30px',
        color: 'white',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '&.MuiAccordionSummary-root.Mui-expanded': {
          backgroundColor: '#382b78 !important',
        },
      }));

  const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: '0px 20px 20px 30px',
    backgroundColor: '#382B78',
    color: 'white',
  }));

  const filter = () => {
    return (
      <>
        <div
          className={`p30 ${
            matches ? '' : 'dFlex justifyContentSpaceBetween alignItemsCenter'
          }`}
        >
          <Typography className="colorWhite fs18 fw500">Filter</Typography>
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
        </div>
        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <div className="alignItemsCenter dFlex">
                <Typography className="mr25">Price</Typography>
                <StyledBadge badgeContent={2} />
              </div>
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
              <div className="alignItemsCenter dFlex">
                <Typography className="mr25">Collection</Typography>
                <StyledBadge badgeContent={1} />
              </div>
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
              <div className="alignItemsCenter dFlex">
                <Typography className="mr25">On sale in</Typography>
                <StyledBadge badgeContent={5} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {onSaleInFilter.map((item, index) => (
                <div
                  key={item + index}
                  className="dFlex justifyContentSpaceBetween alignItemsCenter"
                >
                  <Typography>{item}</Typography>
                  <Switch />
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={`textAlignCenter ${matches ? 'mt20' : 'dFlex p20'}`}>
          <Button
            className={`nft_button gradientButton colorWhite mr20 ${
              matches ? '' : 'w50'
            }`}
            onClick={toggleDrawer(false)}
          >
            Apply Filter
          </Button>
          <Button
            className={`nft_button borderWhite colorWhite ${
              matches ? '' : 'w50'
            }`}
            onClick={toggleDrawer(false)}
          >
            Clear
          </Button>
        </div>
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
      className={`${matches ? 'mt80' : 'mt20'}`}
    >
      <Grid item lg={4}>
        <Typography className={`${matches ? 'fs50 fw800' : 'fs40 fw700'}`}>
          Marketplace
        </Typography>

        {matches && (
          <div className="mt50">
            <Paper
              elevation={0}
              className={`w100p br20 pb20`}
              style={{
                background: '#31256C',
              }}
            >
              {filter()}
            </Paper>
          </div>
        )}
      </Grid>
      <Grid item lg={8}>
        <div
          className={`${
            matches ? 'mt25 dFlex justifyContentSpaceBetween' : ''
          }`}
        >
          <Box
            className={`dFlex alignItemsCenter flex-grow-100 p15-25 bgBlue br25  ${
              matches ? 'mr20' : ''
            }`}
          >
            <SearchIcon style={{ color: '#ACA8C0' }} />

            <TextField
              placeholder="Search"
              variant="standard"
              className={`${classes.root} ml10`}
              InputProps={{ disableUnderline: true }}
            />
          </Box>
          <div className="dFlex">
            <Button
              className={`nft_button bgGradient colorWhite mr20 ${
                matches ? '' : 'mt20 w60p p14'
              }`}
              startIcon={<ListIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              Recently Listed
            </Button>
            {matches ? null : (
              <>
                <Button
                  className={`nft_button gradientButton colorWhite ${
                    matches ? '' : 'mt20 w40 p14'
                  }`}
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
          </div>
        </div>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 2, md: 2, lg: 4 }}
          className="mt10"
        >
          {items.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={item + index}
              className="w100"
            >
              <Paper
                elevation={0}
                className={`w100 bRadius20`}
                style={{
                  background: '#31256C',
                }}
              >
                <div className="ftpContainer">
                  <img
                    src={item.image}
                    className="w100 h320 brTop20 objectFitCover"
                  />
                  <div className="overlay"></div>
                  <div className="buyButton">
                    <Button
                      className=" fs12 fw700 br25 p10-42"
                      startIcon={<BidBuyIcon />}
                      style={{
                        background: 'white',
                        color: '#271D5A',
                        textTransform: 'inherit',
                      }}
                      onClick={() => {
                        navigate('marketplace/product-details');
                      }}
                    >
                      Bid | Buy
                    </Button>
                  </div>
                </div>
                <div className="p0-20 pb30">
                  <div className="pt10 dFlex justifyContentSpaceBetween">
                    <Typography className="colorWhite fontSize14 fw300">
                      #{item.id}
                    </Typography>
                    <div className="hover-cursor-pointer">
                      <FavoriteBorderIcon
                        style={{ width: 18, color: 'white' }}
                      />
                    </div>
                  </div>
                  <div className="pt10 dFlex justifyContentSpaceBetween">
                    <Typography className="colorWhite fontSize18 fw600">
                      {item.name}
                    </Typography>
                    <Typography className="colorWhite fs22 fw700">
                      ${item.price}
                    </Typography>
                  </div>
                  <div className="pt16 dFlex justifyContentSpaceBetween">
                    <Typography className="colorWhite fs14 fw400">
                      Start BID
                      <br />
                      <span className="colorWhite fontSize16 fw600">
                        {item.startBid}
                      </span>
                    </Typography>
                    <Typography className="colorWhite fs14 fw400">
                      End BID in
                      <br />
                      <span className="colorWhite fontSize16 fw600">
                        {item.endBidIn} Days
                      </span>
                    </Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
