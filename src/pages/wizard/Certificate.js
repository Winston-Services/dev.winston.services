import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateStar from './../../assets/certificate_star.svg';
import { PropTypes } from 'prop-types';

export default function Certificate({ wizardData, setWizardData }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (wizardData.workshop === '') {
      // navigate('/wizard');
    }
  }, []);
  return (
    <Container>
      <Grid container textAlign="center" spacing={4}>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <img src={CertificateStar} />
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Typography variant="h4">
            Successfully subscribe Monthly Hosting!
          </Typography>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sapien consectetur leo duis arcu. Justo, habitant sit a enim
            tincidunt urna risus porttitor dignissim. Tristique egestas ipsum
            nam commodo, aliquet ac. Lectus scelerisque leo ac tortor quis.
          </Typography>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12} mt={6}>
          {wizardData.workshop === 'Custom' ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setWizardData({ ...wizardData, workshop: 'Smart Contract' });
                navigate('/wizard');
              }}
            >
              Go back
            </Button>
          ) : null}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate('/wizard');
            }}
          >
            Next Smartcontract
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
Certificate.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
};
