import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as ethers from 'ethers';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useApi from '../../../hooks/useApi';
import useUser from '../../../hooks/useUser';

const GenerateEvmWallet = ({ custodialType, handleClose, handleAddWallet }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const [wallet, setWallet] = React.useState(null);
  const [publicKey, setPublicKey] = React.useState('');
  const [privateKey, setPrivateKey] = React.useState('');
  const [seedPhrase, setSeedPhrase] = React.useState([]);
  const [passphrase, setPassphrase] = React.useState('');

  const importEncryptedEVMWallet = async (encryptedWallet) => {
    const _wallet = await ethers.Wallet.fromEncryptedJson(
      encryptedWallet,
      passphrase
    );
    setWallet(_wallet);
    setPublicKey(_wallet.address);
    setPrivateKey(_wallet.privateKey);
    setSeedPhrase(_wallet.mnemonic.phrase.split(' '));
  };

  const importNonEncryptedEVMWallet = async (nonEncryptedWallet) => {
    const _wallet = await ethers.Wallet.fromJson(nonEncryptedWallet);
    setWallet(_wallet);
    setPublicKey(_wallet.address);
    setPrivateKey(_wallet.privateKey);
    setSeedPhrase(_wallet.mnemonic.phrase.split(' '));
  };

  const generateWallet = async () => {
    if (!passphrase) {
      setError('Passphrase is required');
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const _wallet = ethers.Wallet.createRandom();
      const passphraseUint8Array = new TextEncoder().encode(passphrase);
      const encryptedJson = await _wallet.encrypt(passphraseUint8Array);
      setWallet(encryptedJson);
      setPublicKey(_wallet.address);
      setPrivateKey(_wallet.privateKey);
      setSeedPhrase(_wallet.mnemonic.phrase.split(' '));
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handlePassphraseChange = (event) => {
    setPassphrase(event.target.value);
  };

  const handleDownloadWallet = async (encrypted) => {
    let _wallet;
    if (encrypted) {
      _wallet = await ethers.Wallet.fromEncryptedJson(wallet, passphrase);
    } else {
      _wallet = wallet;
    }
    const blob = new Blob([JSON.stringify(_wallet)], {
      type: 'application/json',
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'wallet.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (custodialType === 'custodial') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6">Add a Wallet</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography>
            Custodial wallets are managed by a third-party like Winston.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ textTransform: 'none' }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddWallet}
            sx={{ textTransform: 'none' }}
            disabled={loading}
          >
            Add A Wallet
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {success && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your wallet has been generated successfully.
          </Alert>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ maxWidth: '80%', width: '100%' }}>
              <Box sx={{ flex: 1 }}>
                <Tooltip title="Copy to clipboard" placement="top" arrow>
                  <fieldset onClick={() => handleCopy(publicKey)}>
                    <legend>
                      <Typography>Public Key</Typography>
                    </legend>
                    <Typography>{publicKey}</Typography>
                  </fieldset>
                </Tooltip>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Tooltip title="Copy to clipboard" arrow>
                  <fieldset onClick={() => handleCopy(privateKey)}>
                    <legend>
                      <Typography>Private Key</Typography>
                    </legend>
                    <Typography>{privateKey}</Typography>
                  </fieldset>
                </Tooltip>
                <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                <Tooltip title="Copy to clipboard" arrow>
                  <fieldset onClick={() => handleCopy(seedPhrase)}>
                    <legend>
                      <Typography>Seed Phrase</Typography>
                    </legend>
                    <Box>
                      {seedPhrase.map((word, index) => (
                        <Chip key={index} label={word} />
                      ))}
                    </Box>
                  </fieldset>
                </Tooltip>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownloadWallet}
              sx={{ textTransform: 'none' }}
            >
              Download Encrypted Wallet
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDownloadWallet(false)}
              sx={{ textTransform: 'none' }}
            >
              Download Non-Encrypted Wallet
            </Button>
          </Box>
        </Box>
      )}

      {!success && !wallet && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Box
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Passphrase"
              value={passphrase}
              onChange={handlePassphraseChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={generateWallet}
              sx={{ textTransform: 'none' }}
            >
              Generate A New Wallet
            </Button>
          </Box>
          <Box
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Passphrase"
              value={passphrase}
              onChange={handlePassphraseChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={generateWallet}
              sx={{ textTransform: 'none' }}
            >
              Import an Encrypted JSON Wallet
            </Button>
          </Box>
          <Box
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={generateWallet}
              sx={{ textTransform: 'none' }}
            >
              Import a JSON Wallet
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

GenerateEvmWallet.propTypes = {
  custodialType: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAddWallet: PropTypes.func.isRequired,
};

export const AddWallet = ({ handleClose }) => {
  const navigate = useNavigate();
  const [wallets, setWallets] = React.useState([]);
  // const [wallet, setWallet] = React.useState({});
  const [addWallet, setAddWallet] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [custodialType, setCustodialType] = React.useState('custodial');
  const [blockchainType, setBlockchainType] = React.useState('evm');
  const api = useApi();
  const user = useUser();
  const [addWalletMutation] = api.endpoints.addWallet.useMutation();

  const handleAddWallet = (wallet) => {
    setWallets([...wallets, { ...wallet, custodialType, blockchainType }]);
    addWalletMutation(
      {
        address: wallet.address,
        custodialType,
        blockchainType,
      },
      user.token
    );
  };

  const handleRemoveWallet = (wallet) => {
    setWallets(wallets.filter((w) => w.id !== wallet.id));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (!addWallet && wallets.length > 0) {
    return (
      <Box>
        <Toolbar>
          <Tooltip title="Add a wallet">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAddWallet(true)}
            >
              <Icon>add</Icon>
            </Button>
          </Tooltip>
          <Tooltip title="Remove a wallet">
            <Button
              variant="contained"
              color="primary"
              onClick={handleRemoveWallet}
            >
              <Icon>delete</Icon>
            </Button>
          </Tooltip>
        </Toolbar>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        {wallets.map((wallet, index) => (
          <Box key={index}>
            <Typography variant="subtitle1">Wallet Type</Typography>
            {wallet.custodialType === 'custodial' && (
              <Typography variant="body1">
                You have selected a custodial wallet. This means that Winston
                will manage your wallet for you, and you will not have access to
                your private keys.
              </Typography>
            )}
            {wallet.custodialType === 'non-custodial' && (
              <Typography variant="body1">
                You have selected a non-custodial wallet. This means that you
                will have full control over your wallet, and need to manage your
                own keys.
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography variant="h5">Add Wallet</Typography>

        {wallets.length > 0 ? (
          <Typography variant="body2">
            You have a wallet. You can add another one or remove the existing
            one.
          </Typography>
        ) : (
          <>
            <Typography variant="body2">
              Let&apos;s start your journey with Winston. Create a wallet and
              start earning rewards. We support multiple blockchains. Learn more
              about each network in the academy.
            </Typography>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/academy')}
              sx={{ textTransform: 'none' }}
              size="small"
            >
              Learn More
            </Button>
          </>
        )}

        <Stepper activeStep={activeStep} orientation="vertical">
          <Step key="custodial">
            <StepLabel>
              <Typography variant="h6">
                Choose a <strong>Custodial</strong> or{' '}
                <strong>Non-Custodial</strong> wallet
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>
                Select whether you want a custodial or non-custodial wallet.
                <br />
                Custodial wallets are managed by a third-party like Winston,
                while non-custodial wallets give you full control over your
                keys.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  flexDirection={{ xs: 'column', md: 'row' }}
                >
                  <Card
                    sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                    onClick={() => {
                      setCustodialType('custodial');
                      handleNext();
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="../Logo512.png"
                        sx={{ objectFit: 'contain' }}
                        alt="Custodial Wallet"
                      />
                      <CardContent>
                        <Alert severity="warning">
                          <AlertTitle>
                            We store your private keys and keep them safe you
                            just need to sign in.
                          </AlertTitle>
                        </Alert>
                        <Typography gutterBottom variant="h5" component="div">
                          Custodial
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Managed by a third-party service.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card
                    sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                    onClick={() => {
                      setCustodialType('non-custodial');
                      handleNext();
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="../Logo512.png"
                        sx={{ objectFit: 'contain' }}
                        alt="Non-Custodial Wallet"
                      />
                      <CardContent>
                        <Alert severity="info">
                          <AlertTitle>
                            We <strong>do not</strong> store your private keys.
                            We only store your public keys. Your private keys
                            are encrypted and stored on your device.
                          </AlertTitle>
                        </Alert>
                        <Typography gutterBottom variant="h5" component="div">
                          Non-Custodial
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          You have full control over your keys.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Box>
              <Button
                onClick={handleClose}
                sx={{ mt: 1, mr: 1, textTransform: 'none' }}
                variant="contained"
                color="primary"
                fullWidth
              >
                Close
              </Button>
            </StepContent>
          </Step>
          <Step key="blockchain">
            <StepLabel>
              <Typography variant="h6">Choose the blockchain</Typography>
            </StepLabel>
            <StepContent>
              <Typography>
                Choose the blockchain you want to create a wallet for.
                Don&apos;t worry, you can always create another on a different
                network at any time.
              </Typography>

              <Alert severity="info">
                <AlertTitle>Not Sure ?</AlertTitle>
                We recommend you create an EVM wallet. Since it is the most
                versatile blockchain wallet covering many blockchain networks
                including Etherum, Binance Smart Chain, Polygon Arbitrum etc.
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: 'none' }}
                  size="small"
                  onClick={() => navigate('/academy')}
                >
                  Learn More
                </Button>
              </Alert>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 2,
                }}
              >
                <Card
                  sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                  onClick={() => {
                    setBlockchainType('evm');
                    handleNext();
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        EVM
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ethereum and compatible networks.
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/icons/eth.png"
                      sx={{ objectFit: 'contain', padding: 1 }}
                      alt="Bitcoin"
                    />
                  </CardActionArea>
                </Card>
                <Card
                  sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                  onClick={() => {
                    setBlockchainType('bitcoin');
                    handleNext();
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Bitcoin
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Original cryptocurrency.
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/icons/btc.svg"
                      sx={{ objectFit: 'contain', padding: 1 }}
                      alt="Bitcoin"
                    />
                  </CardActionArea>
                </Card>
                <Card
                  sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                  onClick={() => {
                    setBlockchainType('litecoin');
                    handleNext();
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Litecoin
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Known for its fast processing.
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/icons/ltc.png"
                      sx={{ objectFit: 'contain', padding: 1 }}
                      alt="Litecoin"
                    />
                  </CardActionArea>
                </Card>
                <Card
                  sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                  onClick={() => {
                    setBlockchainType('dash');
                    handleNext();
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dash
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Focused on privacy and fast transactions.
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/icons/dash.png"
                      sx={{ objectFit: 'contain', padding: 1 }}
                      alt="Dash"
                    />
                  </CardActionArea>
                </Card>
                <Card
                  sx={{ width: '100%', maxWidth: 345, cursor: 'pointer' }}
                  onClick={() => {
                    setBlockchainType('doge');
                    handleNext();
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Doge
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Popularized as a meme, now a significant crypto.
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/icons/doge.png"
                      sx={{ objectFit: 'contain', padding: 1 }}
                      alt="Doge"
                    />
                  </CardActionArea>
                </Card>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1, textTransform: 'none' }}
                  variant="contained"
                  color="warning"
                >
                  Back
                </Button>
                <Button
                  onClick={handleClose}
                  sx={{ mt: 1, mr: 1, textTransform: 'none' }}
                  variant="contained"
                  color="primary"
                >
                  Close
                </Button>
              </Box>
            </StepContent>
          </Step>
          <Step key="generate">
            <StepLabel>
              <Typography variant="h6">Generate a wallet address</Typography>
            </StepLabel>
            <StepContent>
              {custodialType === 'custodial' && (
                <Typography>
                  You have selected a custodial wallet. This means that Winston
                  will manage your wallet for you, and you will not have access
                  to your private keys.
                </Typography>
              )}
              {custodialType === 'non-custodial' && (
                <Typography>
                  You have selected a non-custodial wallet. This means that you
                  will have full control over your wallet, and need to manage
                  your own keys.
                </Typography>
              )}
              {blockchainType === 'evm' && (
                <>
                  <Typography>Let&apos;s create your EVM wallet.</Typography>
                  <GenerateEvmWallet
                    custodialType={custodialType}
                    handleClose={handleClose}
                    handleAddWallet={handleAddWallet}
                  />
                </>
              )}
              {blockchainType === 'bitcoin' && (
                <Typography>
                  Let&apos;s generate your Bitcoin wallet.
                </Typography>
              )}
              {blockchainType === 'litecoin' && (
                <Typography>
                  Let&apos;s generate your Litecoin wallet.
                </Typography>
              )}
              {blockchainType === 'dash' && (
                <Typography>Let&apos;s generate your Dash wallet.</Typography>
              )}
              {blockchainType === 'doge' && (
                <Typography>Let&apos;s generate your Doge wallet.</Typography>
              )}

              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, textTransform: 'none' }}
                    variant="contained"
                    color="warning"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{ mt: 1, mr: 1, textTransform: 'none' }}
                    variant="contained"
                    color="primary"
                  >
                    Close
                  </Button>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleAddWallet();
                    setActiveStep(0);
                    setAddWallet(false);
                  }}
                  sx={{ textTransform: 'none' }}
                >
                  Done
                </Button>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
      </Box>
    );
  }
};

AddWallet.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default AddWallet;
