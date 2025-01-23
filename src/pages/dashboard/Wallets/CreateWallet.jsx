import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const CreateWallet = ({ handleClose }) => {
  const [action, setAction] = React.useState();

  const handleSubmit = () => {
    handleClose();
  };

  const handleImport = () => {
    setAction('import');
    handleClose();
  };

  const handleCreate = () => {
    setAction('create');
    handleClose();
  };

  if (action === 'import') {
    return <ImportWallet />;
  }

  if (action === 'create') {
    return <CreateWallet />;
  }

  return (
    <Box>
      <Typography variant="h4">Create Wallet</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
        <Typography variant="body1">
          Your wallet is your gateway to the blockchain. You can use it to
          interact with smart contracts, decentralized applications, and more.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          margin: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="body1">Create a new wallet</Typography>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Create
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="body1">Import an existing wallet</Typography>
            <Button variant="contained" color="primary" onClick={handleImport}>
              Import
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

CreateWallet.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateWallet;
