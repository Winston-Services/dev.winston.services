import React from 'react';

import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import { PropTypes } from 'prop-types';

import verification from './../../../assets/verification.svg';

export default function CheckoutCard({ data }) {
  return (
    <Card
      className="wizardCard"
      sx={{
        p: 6,
        height: '100%',
      }}
      elevation={0}
    >
      <CardContent sx={{ height: '100%' }}>
        <Box
          display={'flex'}
          sx={{ height: '100%' }}
          flexDirection="column"
          gap={3}
        >
          <Typography variant={'h5'}>{data.title}</Typography>
          <Typography variant={'h4'} sx={{ mb: 3 }}>
            {data.price}
          </Typography>

          {data?.duration ? (
            <Typography variant={'h6'} display={'flex'} alignItems={'center'}>
              <Box component={'img'} sx={{ mr: 1 }} src={verification} />
              {data.duration}
            </Typography>
          ) : null}

          <Typography
            variant={'subtitle2'}
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'end' }}
          >
            {data.text}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className="purchase-button"
            onClick={data.onBtnClick}
          >
            {data.buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CheckoutCard.propTypes = {
  data: PropTypes.object,
};
