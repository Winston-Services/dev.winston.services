import React from 'react';

import { Container, Grid, Typography, Paper } from '@mui/material';

import NFTCreatedImage from '../../../assets/nft_created.png';
import LeftShine from './../../../assets/left_shine.svg';
import RightShine from './../../../assets/right_shine.svg';

function NFTCreated() {
  return (
    <Container>
      <Grid container display="flex" justifyContent={'center'}>
        <Grid
          item
          md={6}
          xs={12}
          display="flex"
          flexDirection={'column'}
          alignItems="center"
        >
          <Grid gap={2.5} display="flex" alignItems={'center'}>
            <img
              src={LeftShine}
              alt="left-shine"
              height={'38px'}
              width={'33px'}
            />
            <Typography textAlign={'center'} sx={{ fontSize: '32px' }}>
              Your NFT has been listed!
            </Typography>
            <img
              src={RightShine}
              alt="left-shine"
              height={'38px'}
              width={'33px'}
            />
          </Grid>
          <Typography textAlign={'center'} mt={1.4} variant="subtitle1">
            Your NFT has been Succesfully listed on our marketplace.
          </Typography>
          <Grid my={5}>
            <img
              src={NFTCreatedImage}
              alt="image"
              height="304px"
              width="100%"
              style={{ borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                px: 1.4,
                py: 2,
                width: '100%',
                border: '1px solid #483996',
              }}
            >
              <Typography noWrap variant="subtitle1" sx={{ cursor: 'pointer' }}>
                https://winston/NFT/winston_art/0x495f27678c248420045768401991591...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NFTCreated;
