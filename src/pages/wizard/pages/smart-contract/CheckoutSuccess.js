import React from 'react';

import { Button, Container, Grid, Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import CertificateStar from './../../../../assets/certificate_star.svg';

export default function SuccessCheckout({ wizardData }) {
  const navigate = useNavigate();
  return (
    <Container sx={{ display: 'flex', alignItems: 'center' }}>
      <Grid textAlign={'center'}>
        <img src={CertificateStar} />
        <Typography variant="h4" mt={5}>
          {wizardData.smartContractSuccessText}
        </Typography>
        <Typography mt={2} mb={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          sapien consectetur leo duis arcu. Justo, habitant sit a enim tincidunt
          urna risus porttitor dignissim. Tristique egestas ipsum nam commodo,
          aliquet ac. Lectus scelerisque leo ac tortor quis.
        </Typography>
        <Box display="flex" justifyContent={'center'}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate('/wizard');
            }}
            sx={{ mr: 2 }}
          >
            Go to Workshop
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}
SuccessCheckout.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
