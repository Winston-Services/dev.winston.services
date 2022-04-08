import React from 'react';

import {
  Card,
  CardActionArea,
  Box,
  Grid,
  CardContent,
  Typography,
  Collapse,
} from '@mui/material';
import { PropTypes } from 'prop-types';

export default function CardType2({ item }) {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    const anchor = !anchorEl ? event.currentTarget : false;
    setAnchorEl(anchor);
  };

  return (
    <>
      <Card elevation={0} className="blueGradientBG" onClick={handleClick}>
        <CardActionArea sx={{ p: 5 }}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={'auto'}>
                <img src={item.icon} />
              </Grid>
              <Grid item xs flexGrow={1}>
                <Typography gutterBottom variant="subtitle1">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.subTitle}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box
        position="relative"
        sx={{
          opacity: anchorEl ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        <Card
          sx={{ mt: '30px' }}
          elevation={0}
          className="blueGradientBG popper-card-arrow"
          onClick={handleClick}
        >
          <Collapse in={!!anchorEl} timeout="auto">
            <CardContent>
              <Box sx={{ display: 'flex', mb: 2 }}>
                {item.icon ? (
                  <Box
                    component="img"
                    sx={{ mr: 2 }}
                    src={item.icon}
                    height="34px"
                  />
                ) : null}
                <Typography
                  gutterBottom
                  textAlign={'center'}
                  variant="subtitle1"
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              {item.moreDescription && (
                <Typography variant="body2" color="text.secondary">
                  {item.moreDescription}
                </Typography>
              )}
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}

CardType2.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
};
