import React from 'react';
import { Typography, Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import TextBox from '../../components/common/TextBox';

const useStyles = makeStyles({
  button: {
    fontSize: 15,
    fontWeight: 500,
    borderRadius: 25,
    textTransform: 'inherit',
    padding: '14px 32px',
    color: 'white',
    lineHeight: 'normal',
  },
});

function SignUp() {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:768px)');
  const [created, setCreated] = React.useState(false);
  const [saveToBrowser, setSaveToBrowser] = React.useState(false);
  const classes = useStyles();
  if (created) {
    return (
      <div>
        <div className={`${matches ? 'mt100' : 'mt50'}`}>
          <Typography className={`lh78 ${matches ? 'fs60' : 'fs35'}`}>
            Your new wallet
            <span className="fw700"> Created</span>
          </Typography>
          <Typography className="fs14 fw400 mt50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            dui tincidunt, accumsan ligula sit amet, dignissim tortor. Curabitur
            tincidunt nulla mi, sit amet accumsan elit porttitor vitae. Mauris
            vehicula tempus risus, non sollicitudin mi semper in. Quisque
            vehicula, erat tempor mattis suscipit, diam metus viverra augue,
            auctor mattis libero ante at
          </Typography>
        </div>
        <div className={`${matches ? 'mt50' : 'mt30'}`}>
          <Button
            disabled={saveToBrowser ? true : false}
            className={`${classes.button} mr20 ${
              saveToBrowser ? 'disableColor colorWhite' : 'borderWhite'
            }`}
            onClick={() => setSaveToBrowser(!saveToBrowser)}
          >
            {saveToBrowser ? 'Saved' : 'Save to Browser'}
          </Button>
          <Button className={`${classes.button} bgGradient `}>
            Download Key
          </Button>
        </div>

        {saveToBrowser && (
          <div className="mt30 dFlex">
            <Typography className="fontSize16 fw500">
              Your key is saved successfully.
              <span
                className="colorYellow fs16 fw600 ml10 textDecorationUnderline cursorPointer"
                onClick={() => navigate('/sign-in')}
              >
                Click here
              </span>{' '}
              to login
            </Typography>
          </div>
        )}

        <div className={`mb50 ${matches ? 'mt70' : 'mt30'}`}>
          <Typography className="colorYellow fs14">
            Note : Don&apos;t lose your wallet key! you want to store your
            private key in safe place for accessing your wallet
          </Typography>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={`${matches ? 'mt100' : 'mt50'}`}>
          <Typography className={`lh78 ${matches ? 'fs60' : 'fs35'}`}>
            Create your new
            <span className="fw700"> Wallet</span>
          </Typography>
        </div>
        <div className="mt50">
          <TextBox label={'Password'} placeholder={'Enter your password'} />
        </div>
        <div className="mt30">
          <TextBox
            label={'Confirm Password'}
            placeholder={'Enter your confirm password'}
          />
        </div>
        <div>
          <Button
            className={`${classes.button} bgGradient  ${
              matches ? 'mt50' : 'mt30 w100p'
            }`}
            onClick={() => setCreated(true)}
          >
            Create your wallet
          </Button>
        </div>
        <div
          className={`dFlex mb50 ${
            matches ? 'mt50' : 'mt90 justifyContentCenter'
          }`}
        >
          <Typography className="fs16 fw500 mr10">
            Already have an wallet?
          </Typography>

          <Typography
            className="colorYellow fs16 fw600 textDecorationUnderline cursorPointer"
            onClick={() => navigate('/sign-in')}
          >
            Login to your wallet
          </Typography>
        </div>
      </div>
    );
  }
}

export default SignUp;
