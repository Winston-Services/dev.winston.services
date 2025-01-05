import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export const AddWallet = () => {
  return (
    <Box>
      <Tooltip title="Select A Blockchain">
        <Button>
          Blockchain
        </Button>
      </Tooltip>
      <Typography variant="h5">Add Wallet</Typography>
      <Typography variant="caption">
        Let&apos;s start your journey with Winston. Create your first wallet and
        start earning rewards. We support multiple blockchains. Learn more about
        each network in the academy.
        <br />
        <br />
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Typography>
      <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
      <Typography variant="body1">
        Select the blockchain you want to create a wallet for. Don&apos;t worry
        you can always create another on a different network at any time.
      </Typography>
      <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
      <Alert severity="info">
        <AlertTitle>
          We do not store your private keys. We only store your public keys.
        </AlertTitle>
      </Alert>
      <Box>
        <Typography variant="subtitle1">Wallet Type</Typography>
        <Select
          labelId="blockchain-select-label"
          id="blockchain-select"
          defaultValue="evm"
          label="Blockchain"
        >
          <MenuItem value="evm">EVM</MenuItem>
          <MenuItem value="bitcoin">Bitcoin</MenuItem>
          <MenuItem value="litecoin">Litecoin</MenuItem>
          <MenuItem value="dash">Dash</MenuItem>
          <MenuItem value="doge">Doge</MenuItem>
        </Select>
      </Box>

      <Alert severity="info">
        <AlertTitle>Not Sure ?</AlertTitle>
        We recommend you create an EVM wallet. Since it is the most versatile
        blockchain wallet covering many blockchain networks including Etherum,
        Binance Smart Chain, Polygon Arbitrum etc.
        <br />
        <br />
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Alert>
    </Box>
  );
};

export default AddWallet;
