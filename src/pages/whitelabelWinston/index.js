import * as React from 'react';
import BasicCommands from './BasicCommands';
import CustomizeWinston from './CustomizeWinston';
import BlockchainCommands from './BlockchainCommands';
import ServerOwnerCommands from './ServerOwnerCommands';
import GameCommands from './GameCommands';
import { Grid } from '@mui/material';
export default function Index() {
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
