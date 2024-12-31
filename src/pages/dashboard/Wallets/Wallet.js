import React from 'react';

import { Box, Typography, Paper } from '@mui/material';
import * as ethers from 'ethers';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

export const Wallet = () => {
  const handlePrint = () => {
    window.print();
  };

  const wallet = ethers.Wallet.createRandom();
  const walletAddress = wallet.address;
  const privateKey = wallet.privateKey;
  const Nemonics = wallet.mnemonic;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '161.94mm', // Three times the standard credit card width
        height: '85.6mm', // Standard credit card height when folded
        background: '#EDEDED',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row', // Changed from column to row for horizontal layout
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={handlePrint}
    >
      <Paper
        elevation={3}
        sx={{
          width: '161.94mm',
          height: '85.6mm',
          display: 'flex',
          flexDirection: 'row', // Changed from column to row for horizontal layout
          justifyContent: 'space-evenly',
          textAlign: 'center',
          backgroundColor: '#EDEDED',
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            padding: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '85.6mm',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: .5,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
              Public Key
            </Typography>

            <Box
              sx={{
                backgroundImage: 'url(./assets/MessagePopout.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingY: '24px',
                paddingX: '26px',
                width: '100%',
                fontSize: '10px',
                margin: '14px',
              }}
            >
              Use your public key to receive crypto.
            </Box>
            <Box
              sx={{
                backgroundImage: 'url(./assets/WhiteBG.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingY: '24px',
                paddingX: '26px',
                width: '100%',
              }}
            >
              <QRCode value={`https://debank.com/profile/${walletAddress}`} size={50} />
            </Box>
            <Typography variant="caption">Share this.</Typography>
          </Box>
        </Box>

        {/* Middle */}
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            color: 'white',

            maxWidth: '85.6mm',
          }}
        >
          <Box
            sx={{
              height: '100%',
              borderRight: '2px solid silver',
              borderLeft: '2px solid silver',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {walletAddress}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '53.98mm', // Width of a standard credit card
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
              Crypto for the people.
            </Typography>
            <img
              src={
                'https://rickletoken.com//static/media/rickle_full_image.066839fd7b0a78726405.png'
              }
              alt="Rickle Token"
              style={{ width: '85.6px' }} // Dimensions of a standard credit card
            />
            <Typography variant="caption">Rickle</Typography>
          </Box>
          <Box
            sx={{
              height: '100%',
              borderRight: '2px solid silver',
              borderLeft: '2px solid silver',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                writingMode: 'vertical-rl',
                transform: 'rotate(360deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Keep this for Private
            </Typography>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            padding: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '85.6mm',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: .5,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
              Private Key
            </Typography>

            <Box
              sx={{
                backgroundImage: 'url(./assets/WhiteBG.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingY: '14px',
                paddingX: '16px',
                width: '100%',
              }}
            >
              <QRCode value={privateKey} size={50} />
            </Box>
            <Box
              sx={{
                backgroundImage: 'url(./assets/MessagePopout.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingY: '24px',
                paddingX: '16px',
                width: '100%',
                fontSize: '10px',
                margin: '34px',
              }}
            >
              {Nemonics.phrase}
            </Box>
            <Typography variant="caption">Don&apos;t Share this.</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Wallet;
