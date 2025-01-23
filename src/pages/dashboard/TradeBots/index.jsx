import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const rows = [
  {
    id: '1',
    network: 'BSC',
    router: 'Pancake V2',
    tokenOut: 'WETH',
    amountOut: '100',
    route: 'ETH -> USDT',
    tokenIn: 'USDT',
    amountIn: '100',
    slippage: '1%',
    gasLimit: '100000',
    gasPrice: '100',
    deadline: '100',
    status: 'Active',
    actions: 'Start | Stop | Delete',
  },
];
const WinstonTradeBots = () => {
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4">Winston Trade Bots</Typography>
      </Box>
      <Box>
        <Toolbar>
          <Button variant="contained" color="primary">
            Add Bot
          </Button>
        </Toolbar>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          overflow: 'hidden',
          minHeight: '200px',
          maxHeight: '400px',
          paddingRight: theme.spacing(1),
        })}
      >
        <Box
          sx={{
            flex: 1,
            flexDirection: 'column',
            overflow: 'auto',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="h6">Trade Bots</Typography>
          <List sx={{ width: '100%', paddingRight: 2 }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={(theme) => ({
                    '&.MuiAccordionSummary-root': {
                      backgroundColor: theme.palette.divider,
                    },
                    '&.MuiAccordionSummary-content': {
                      marginX: theme.spacing(1),
                      marginY: theme.spacing(0),
                      minHeight: '34px',
                      height: '34px',
                      padding: theme.spacing(0.5),
                    },
                    '&.MuiAccordionSummary-content.Mui-expanded': {
                      marginX: theme.spacing(1),
                      marginY: theme.spacing(0),
                      minHeight: '34px',
                      height: '34px',
                      padding: theme.spacing(0.5),
                    },
                    marginX: theme.spacing(0),
                    marginY: theme.spacing(0),
                  })}
                >
                  <ListItemText primary="Trade Bot 1" />
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Provider</TableCell>
                        <TableCell>Network</TableCell>
                        <TableCell>Router</TableCell>
                        <TableCell>Token Out</TableCell>
                        <TableCell>Amount Out</TableCell>
                        <TableCell>Token In</TableCell>
                        <TableCell>Amount In</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>RPC.com</TableCell>
                        <TableCell>BSC</TableCell>
                        <TableCell>Pancake V2</TableCell>
                        <TableCell>WETH</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>USDT</TableCell>
                        <TableCell>100</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Deadline</TableCell>
                        <TableCell>Gas Limit</TableCell>
                        <TableCell>Gas Price</TableCell>
                        <TableCell>Min. Profit Margin</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>100</TableCell>
                        <TableCell>100000</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default WinstonTradeBots;
