import * as React from 'react';
import BasicCommands from './BasicCommands';
import CustomizeWinston from './CustomizeWinston';
import BlockchainCommands from './BlockchainCommands';
import ServerOwnerCommands from './ServerOwnerCommands';
import GameCommands from './GameCommands';
export default function Index() {
  return (
    <div>
      <CustomizeWinston />
      <BasicCommands />
      <BlockchainCommands />
      <ServerOwnerCommands />
      <GameCommands />
    </div>
  );
}
