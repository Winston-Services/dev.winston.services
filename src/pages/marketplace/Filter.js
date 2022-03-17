import React from 'react';

import {
  Typography,
  Paper,
  Button,
  Switch,
  Badge,
  useMediaQuery,
  IconButton,
  Grid,
  Box,
  Drawer,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { PropTypes } from 'prop-types';

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

function Filter({ toggleDrawer, openDrawer }) {
  const matches = useMediaQuery('(min-width:600px)');
  const [expanded, setExpanded] = React.useState('panel1');

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

  const list = () => <Box role="presentation">{filter()}</Box>;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
              onClick={toggleDrawer}
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
                <Badge color="primary" badgeContent={2} />
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
                <Badge color="primary" badgeContent={1} />
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
                <Badge color="primary" badgeContent={5} />
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
            onClick={toggleDrawer}
          >
            Apply Filter
          </Button>
          <Button
            variant="outlined"
            sx={{ width: { xs: '50%', sm: 'max-content' } }}
            onClick={toggleDrawer}
          >
            Clear
          </Button>
        </Grid>
      </>
    );
  };

  return (
    <div>
      <Drawer
        PaperProps={{ gradient: false }}
        anchor={'right'}
        open={openDrawer}
        onClose={toggleDrawer}
        className="filterDrawer"
      >
        {list()}
      </Drawer>
      <Paper elevation={0} className="rounded">
        {filter()}
      </Paper>
    </div>
  );
}

Filter.propTypes = {
  toggleDrawer: PropTypes.node,
  openDrawer: PropTypes.node,
};

export default Filter;
