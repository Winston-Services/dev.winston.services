import * as React from 'react';

import { Grid, Container } from '@mui/material';

import BasicCommands from './components/BasicCommands';
import BlockchainCommands from './components/BlockchainCommands';
import CustomizeWinston from './components/CustomizeWinston';
import GameCommands from './components/GameCommands';
import ServerOwnerCommands from './components/ServerOwnerCommands';

export default function WhiteLabelWinston() {
  return (
    <Container>
      <Grid>
        <CustomizeWinston />
        <BasicCommands />
        <BlockchainCommands />
        <ServerOwnerCommands />
        <GameCommands />
      </Grid>
    </Container>
  );
}
