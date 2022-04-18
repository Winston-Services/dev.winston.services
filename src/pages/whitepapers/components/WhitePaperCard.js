import React from 'react';

import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Grid, Paper, Typography, Button, Card } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router';

import WinstonIcon from './../../../assets/assets_winston_icon.svg';

function WhitePaperCard({ data }) {
  const navigate = useNavigate();
  return (
    <Grid>
      {data.map((item) => (
        <Card key={item.title} elevation={0} sx={{ p: 2.5, my: 2 }}>
          <Grid container display="flex" alignItems={'center'}>
            <Grid container item md={9} display="flex" gap={2}>
              <Grid item>
                <Paper elevation={0} className="gradientPaper">
                  <img
                    src={WinstonIcon}
                    style={{ height: '90px', width: '90px' }}
                  />
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sm={9}
                display="flex"
                flexDirection={'column'}
                gap={1}
              >
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="subtile1">{item.subtitle}</Typography>
                <Grid display="flex" gap={4}>
                  <Typography variant="subtile1">Page: {item.page}</Typography>
                  <Typography variant="subtile1">
                    Size: {item.size} MB
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              sx={{ justifyContent: { xs: 'start', md: 'end' } }}
            >
              <Button
                startIcon={<AssignmentOutlinedIcon />}
                variant="contained"
                color="secondary"
                onClick={() => navigate('/whitepapers/documents')}
                sx={{ my: 2, width: { xs: '100%', sm: 'auto' } }}
              >
                View document
              </Button>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Grid>
  );
}

WhitePaperCard.propTypes = {
  data: PropTypes.array,
};

export default WhitePaperCard;
