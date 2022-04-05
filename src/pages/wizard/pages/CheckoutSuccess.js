import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import CertificateStar from './../../../assets/certificate_star.svg';

export default function SuccessCheckout({ wizardData, coin }) {
  const navigate = useNavigate();
  return (
    <Container sx={{ display: 'flex', alignItems: 'center' }}>
      <Grid textAlign={'center'}>
        <img src={CertificateStar} />
        <Typography variant="h4" mt={5}>
          {coin
            ? wizardData.coinSuccessText
            : wizardData.smartContractSuccessText}
        </Typography>
        <Typography mt={2} mb={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          sapien consectetur leo duis arcu. Justo, habitant sit a enim tincidunt
          urna risus porttitor dignissim. Tristique egestas ipsum nam commodo,
          aliquet ac. Lectus scelerisque leo ac tortor quis.
        </Typography>
        {coin ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate('/wizard/custom/smart-contract-checkout');
            }}
          >
            Proceed to smart contract checkout
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate('/wizard');
            }}
          >
            Go To Workshop
          </Button>
        )}
      </Grid>
    </Container>
  );
}
SuccessCheckout.propTypes = {
  coin: PropTypes.bool,
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
