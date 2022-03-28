import React from 'react';
import { Chip, Link, Typography, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AcademyCard({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <Grid className="academy-container">
        <img
          src={item.image}
          style={{
            width: '100%',
            height: '260px',
            borderRadius: '20px',
            objectFit: 'cover',
          }}
        />
        <Grid className="academy-level-chip">
          <Chip
            variant="filled"
            icon={item.difficultyLevelIcon}
            label={item.difficultyLevel}
          />
        </Grid>
      </Grid>
      <Grid mt={2.5}>
        <Link
          onClick={() => {
            navigate('/academy/details');
          }}
          variant="h6"
        >
          {item.title}
        </Link>
      </Grid>
      <Typography variant="subtitle2" mt={1}>
        {item.description}
      </Typography>
      <Grid display={'flex'} justifyContent={'space-between'} mt={3.75}>
        <Grid display={'flex'} alignItems={'center'}>
          <AccessTimeIcon sx={{ mr: 1.25 }} />
          <Typography variant="subtitle1">{item.duration}</Typography>
        </Grid>
        <Grid display={'flex'} alignItems={'center'}>
          <StarIcon sx={{ mr: 1.25, color: '#FFD215' }} />
          <Typography variant="subtitle1">{item.rating} review</Typography>
        </Grid>
      </Grid>
    </>
  );
}
AcademyCard.propTypes = {
  item: PropTypes.object,
};

export default AcademyCard;
