import React from 'react';

import {
  Typography,
  Button,
  Switch,
  Badge,
  IconButton,
  Grid,
  Box,
  Drawer,
  Chip,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { PropTypes } from 'prop-types';
import { ExpandMore } from '@mui/icons-material';

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
  const [expanded, setExpanded] = React.useState('panel1');

  const list = () => <Box role="presentation">{filter()}</Box>;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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

  const filter = () => {
    return (
      <>
        <CardContent sx={{ p: 4 }}>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={'space-between'}
          >
            <Typography variant="h6">Filter</Typography>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              aria-label="close"
              onClick={toggleDrawer}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </CardContent>
        {filterPanels.map((accordionData) => (
          <Accordion
            disableGutters
            key={accordionData.summaryText}
            elevation={0}
            expanded={expanded === accordionData.summaryText}
            onChange={handleChange(accordionData.summaryText)}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ px: 4, py: 1 }}
              aria-controls={`${accordionData.summaryText}-content`}
            >
              <Grid display={'flex'} alignItems={'center'}>
                <Typography>{accordionData.summaryText}</Typography>
                <Badge
                  sx={{ ml: 2.5 }}
                  color="primary"
                  invisible={!accordionData.summaryCount}
                  badgeContent={accordionData.summaryCount}
                  max={9}
                />
              </Grid>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, py: 1, pb: 3 }}>
              {accordionData.detailsComponent}
            </AccordionDetails>
          </Accordion>
        ))}
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" justifyContent="center" alignItems={'center'}>
            <Button
              variant="contained"
              color="secondary"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              Apply Filter
            </Button>
            <Button variant="outlined" onClick={toggleDrawer}>
              Clear
            </Button>
          </Box>
        </CardContent>
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
      <Card elevation={0} sx={{ display: { xs: 'none', md: 'block' } }}>
        {filter()}
      </Card>
    </div>
  );
}

Filter.propTypes = {
  toggleDrawer: PropTypes.node,
  openDrawer: PropTypes.node,
};

export default Filter;
