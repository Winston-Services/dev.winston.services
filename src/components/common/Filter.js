import React from 'react';

import { ExpandMore } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Typography,
  Button,
  Badge,
  IconButton,
  Grid,
  Box,
  Drawer,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { PropTypes } from 'prop-types';

function Filter({ toggleDrawer, openDrawer, filterPanels }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const list = () => <Box role="presentation">{filter()}</Box>;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
            <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
              Apply Filter
            </Button>
            <Button variant="outlined">Clear</Button>
          </Box>
        </CardContent>
      </>
    );
  };

  return (
    <div>
      <Drawer
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
  toggleDrawer: PropTypes.func,
  openDrawer: PropTypes.bool,
  filterPanels: PropTypes.array,
};

export default Filter;
