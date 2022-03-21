import * as React from 'react';
import { Grid } from '@mui/material';
import BasicCommands from './components/BasicCommands';
import CustomizeWinston from './components/CustomizeWinston';
import BlockchainCommands from './components/BlockchainCommands';
import ServerOwnerCommands from './components/ServerOwnerCommands';
import GameCommands from './components/GameCommands';

export default function WhiteLabelWinston() {
  return (
    <Grid>
      <CustomizeWinston />
      <BasicCommands />
      <BlockchainCommands />
      <ServerOwnerCommands />
      <GameCommands />
    </Grid>
  );
}
