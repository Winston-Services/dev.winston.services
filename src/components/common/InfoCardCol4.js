import React, { useState } from 'react';
import { Grid, Typography, Card } from '@mui/material';
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
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 2, md: 2, lg: 4 }}
      mt={8}
    >
      {data?.map((item, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            key={index.toString()}
            sx={{
              transition: '0.5s ease transform',
              transform:
                cardData !== ''
                  ? index % 2 !== 0
                    ? 'translateY(50px)'
                    : index % 2 === 0
                    ? 'translateY(-50px)'
                    : ''
                  : 'translateY(0%)',
            }}
          >
            <Card
              className={`${cardData.index === index && 'openCard'}`}
              elevation={10}
              sx={{
                display: 'block',
                background: `linear-gradient(133.68deg, #6151B0 1.19%, #42328C 50.1%)`,
                cursor: 'pointer',
                borderRadius: '20px',
                padding: '30px',
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
            </Card>

            {cardData.index === index && cardData !== '' && (
              <Card
                className={`noselect ${
                  cardData.index === index && cardData !== ''
                    ? 'showCard'
                    : 'hideCard'
                }`}
                sx={{
                  display: 'block',
                  background: `linear-gradient(133.68deg, #6151B0 1.19%, #42328C 50.1%)`,
                  cursor: 'pointer',
                  borderRadius: '20px',
                  marginTop: '40px',
                  padding: '30px',
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
                  <img src={item.icon} />
                  <Typography variant={'subtitle1'}>{item.title}</Typography>
                </Grid>
                <Typography mt={1} variant={'subtitle2'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra amet adipiscing ipsum placerat nulla gravida elit,
                  non. Mauris neque egestas in.
                </Typography>
              </Card>
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
