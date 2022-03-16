import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { PropTypes } from 'prop-types';

function InfoCardCol4({ data }) {
  const [cardData, setCardData] = useState('');
  const handelClick = (item, index) => {
    if (cardData === '' || cardData.index !== index) {
      item.index = index;
      setCardData(item);
    } else if (cardData.index === index) {
      setCardData('');
    }
  };
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
      {data?.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index.toString()}>
            <Paper
              elevation={10}
              sx={{
                display: 'block',
                background: `linear-gradient(133.68deg, #6151B0 1.19%, #42328C 50.1%)`,
                cursor: 'pointer',
                borderRadius: '20px',
              }}
              onClick={() => {
                handelClick(item, index);
              }}
            >
              <img src={item.icon} />
              <Typography mt={2} variant={'h6'}>
                {item.title}
              </Typography>
              <Typography mt={1} variant={'subtitle2'}>
                {item.description}
              </Typography>
            </Paper>

            {cardData.index === index && cardData !== '' && (
              // {true && (
              <Paper
                sx={{
                  display: 'block',
                  background: `linear-gradient(133.68deg, #6151B0 1.19%, #42328C 50.1%)`,
                  cursor: 'pointer',
                  borderRadius: '20px',
                }}
                onClick={() => {
                  handelClick(item, index);
                }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={item.icon} style={{ width: '22%' }} />
                  <Typography
                    level={'h6'}
                    className="colorWhite ml15"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Typography variant={'h6'} className="colorWhite mt10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra amet adipiscing ipsum placerat nulla gravida elit,
                  non. Mauris neque egestas in.
                </Typography>
              </Paper>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}

InfoCardCol4.propTypes = {
  data: PropTypes.element,
};

export default InfoCardCol4;
