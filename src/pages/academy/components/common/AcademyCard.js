import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import {
  Typography,
  Grid,
  Paper,
  CardMedia,
  Card,
  CardContent,
  Box,
  CardActionArea,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Badge } from '../../../../assets/badge_icon.svg';
import Beginner from '../../../../assets/beginner_icon.svg';
import Expert from '../../../../assets/expert_icon.svg';
import Intermediate from '../../../../assets/intermediate_icon.svg';

const difficultyLevelIcons = {
  Beginner,
  Expert,
  Intermediate,
};

function AcademyCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card elevation={0} sx={{ position: 'relative', height: '100%' }}>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
        }}
        onClick={() => {
          navigate(`/academy/details/${item.id}`);
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          height="260px"
          sx={{ objectFit: 'cover', cursor: 'pointer' }}
          image={item.image}
          alt="green iguana"
        />

        <Box
          sx={{
            top: 0,
            width: '100%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            pointerEvents: 'none',
          }}
        >
          <Paper
            elevation={0}
            sx={{ borderRadius: '5px', backgroundColor: '#271D5A' }}
          >
            <Grid container alignItems={'center'} sx={{ mx: 1, my: 0.8 }}>
              <img
                src={difficultyLevelIcons[item.difficultyLevel]}
                alt="img"
                height="14px"
                width="14px"
              />
              <Typography ml={0.7} fontSize="12px">
                {item.difficultyLevel}
              </Typography>
            </Grid>
          </Paper>
          {item.price ? (
            <Grid>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: '#FFD215',
                  color: '#271D5A',
                  px: 1,
                  py: 0.5,
                  borderRadius: '5px',
                }}
              >
                <Typography variant="subtitle2" fontWeight={700}>
                  {item.currencySymbol + item.price}
                </Typography>
              </Paper>
            </Grid>
          ) : (
            <></>
          )}
        </Box>

        <CardContent
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {item.rewardPoint ? (
            <Grid
              container
              my={2}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Typography fontSize="20px">Total reward points</Typography>
              <Grid display={'flex'} alignItems="center">
                <Badge />
                <Typography variant="h5" fontWeight={700} ml={1}>
                  {item.rewardPoint}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
          <Grid>
            <Typography variant="h6">{item.title}</Typography>
          </Grid>
          {item.description ? (
            <Typography variant="subtitle2" mt={1}>
              {item.description}
            </Typography>
          ) : (
            <></>
          )}

          {item.duration ? (
            <Grid
              container
              justifyContent={'space-between'}
              alignItems="flex-end"
              sx={{ flexGrow: 1 }}
              mt={3.75}
            >
              <Grid item display={'flex'} alignItems={'center'} gap={0.5}>
                <AccessTimeIcon sx={{ width: '20px', height: '20px' }} />
                <Typography variant="subtitle2">{item.duration}</Typography>
              </Grid>
              <Grid item display={'flex'} alignItems={'center'} gap={0.5}>
                <StarIcon
                  sx={{ width: '20px', height: '20px', color: '#FFD215' }}
                />
                <Typography variant="subtitle2">
                  {item.rating} reviews
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

AcademyCard.propTypes = {
  item: PropTypes.object,
};

export default AcademyCard;
