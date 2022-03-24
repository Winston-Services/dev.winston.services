import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ethereumBlue from './../../../assets/ethereum_blue.svg';
import WizardSteppers from '../WizardSteppers';
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Grid,
  FormLabel,
  RadioGroup,
  Radio,
  FormControl,
  Switch,
  Container,
  Button,
  Card,
  Divider,
  ListItem,
  ListItemAvatar,
} from '@mui/material';

function stepAccessUpgrade({ wizardData }) {
  let navigate = useNavigate();
  const [switchValue, setSwitchValue] = useState(false);

  const handleChange = () => {
    setSwitchValue(!switchValue);
  };

  useEffect(() => {
    if (wizardData.workshop === '') {
      navigate('/wizard');
    }
  }, []);

  return (
    <Container>
      {/* {wizardData.workshop === 'Smart Contract' && ( */}
      <Typography variant="h3">Smart Contract Workshop</Typography>
      {/* )} */}
      {wizardData.workshop === 'Custom' && (
        <Grid>
          <Typography variant="h3" className={`colorWhite service-text dFlex`}>
            <span>1. Coin Workshop</span>
          </Typography>

          <Typography variant="h3">2. Smart Contract Workshop</Typography>
        </Grid>
      )}
      <Grid container>
        <Grid item mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={3} />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <ListItem>
              <ListItemAvatar>
                <img width={'60%'} src={ethereumBlue} alt="icon" />
              </ListItemAvatar>
              <Typography variant={'h5'}>
                {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                {wizardData.typeOfContact}
              </Typography>
            </ListItem>
            <Grid mb={3}>
              <Divider />
            </Grid>
            <Grid>
              <FormGroup>
                <Grid container>
                  <Grid item sm={5} xs={12} lg={5}>
                    <FormControl>
                      <Grid item container>
                        <Grid item container>
                          <Grid item lg={12}>
                            <FormLabel>
                              <Typography variant="h5">Access</Typography>
                            </FormLabel>
                          </Grid>
                        </Grid>
                        <Grid item lg={12}>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Ownable"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="Ownable"
                              control={<Radio />}
                              label="Ownable"
                            />
                            <FormControlLabel
                              value="Roles"
                              control={<Radio />}
                              label="Roles"
                            />
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item sm={1} xs={12} lg={1}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                  </Grid>
                  <Grid item sm={6} xs={12} lg={6}>
                    <FormControl>
                      <Grid item container>
                        <Grid item lg={10}>
                          <FormLabel id="demo-radio-buttons-group-label">
                            <Typography variant="h5">Upgradeability</Typography>
                          </FormLabel>
                        </Grid>
                        <Grid item lg={2}>
                          <Switch onChange={handleChange} />
                        </Grid>
                      </Grid>
                      <Grid>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Transparent"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Transparent"
                            control={<Radio />}
                            label="Transparent"
                          />
                          <FormControlLabel
                            value="UUPS"
                            control={<Radio />}
                            label="UUPS"
                          />
                        </RadioGroup>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
              </FormGroup>
            </Grid>
          </Card>
        </Grid>
        <Grid
          container
          spacing={2}
          mt={4}
          display="flex"
          justifyContent="flex-end"
        >
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => navigate('/wizard/step-setting')}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/step-info')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default stepAccessUpgrade;
