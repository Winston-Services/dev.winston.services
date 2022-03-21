import {
  Card,
  CardActionArea,
  Box,
  CardContent,
  Typography,
  Collapse,
} from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';

export default function SectionCard({ item, index, setOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    const anchor = !anchorEl ? event.currentTarget : false;
    setOpen(index, anchor);
    setAnchorEl(anchor);
  };

  return (
    <>
      <Card elevation={0} className="blueGradientBG" onClick={handleClick}>
        <CardActionArea sx={{ py: 5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={item.icon} />
          </Box>
          <CardContent onClick={() => setOpen(index)}>
            <Typography
              gutterBottom
              textAlign={'center'}
              variant="subtitle1"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              textAlign={'center'}
              variant="body2"
              color="text.secondary"
            >
              {item.description}
            </Typography>
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
                {item.moreDescription}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}

SectionCard.propTypes = {
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  item: PropTypes.object,
};
