import React from 'react';
import { Card, CardContent, Grid, Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

export default function WizardCard({
  onClick,
  item,
  activeNetwork,
  title,
  activeContract,
}) {
  return (
    <Card
      elevation={0}
      className={`wizardCard ${
        activeNetwork === item.title || activeContract === item.title
          ? 'activeWizardCard'
          : ''
      } `}
      onClick={onClick}
    >
      <CardContent sx={{ my: 7 }}>
        <Grid item sm={12} display="flex" justifyContent="center">
          <Box component="img" sx={{ mb: 5 }} src={item.icon} alt="icon" />
        </Grid>
        <Grid item sm={12}>
          <Typography textAlign={'center'} variant={'h6'}>
            {title && title + ' '}
            {item.title}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

WizardCard.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  activeNetwork: PropTypes.string,
  title: PropTypes.string,
  activeContract: PropTypes.string,
};
