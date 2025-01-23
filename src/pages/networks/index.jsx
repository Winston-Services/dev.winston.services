import React from 'react';

import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useNetworks } from '../../hooks/useNetworks';

export default function Networks() {
  const { networks, networkRpcs, chainId2NetworkName } = useNetworks();
  const chainIds = Object.keys(networks).filter(
    (key) => typeof networks[key] !== 'function'
  );
  return (
    <Container>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
        <Typography variant="h3">Networks</Typography>
        <List>
          {chainIds.map((chainId) => (
            <Accordion key={chainId}>
              <AccordionSummary>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
                    <Avatar src={`https://raw.githubusercontent.com/trustwallet/assets/refs/heads/master/blockchains/${chainId2NetworkName(Number(chainId)).toLowerCase()}/info/logo.png`} alt={chainId2NetworkName(Number(chainId))} />
                    <Typography sx={{ marginLeft: 1 }}><strong>{chainId2NetworkName(Number(chainId))}</strong></Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      gap: 2,
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Typography>
                      <strong>Chain ID:</strong> {chainId}
                    </Typography>
                    <Typography>
                      <strong>Total Nodes:</strong>{' '}
                      {networkRpcs(chainId).length}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {networkRpcs(chainId).map((networkId) => (
                    <ListItem
                      key={networkId.id}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                        padding: 2,
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        alignItems: 'flex-start', // Align items to the left
                      }}
                    >
                      <Table size="small">
                        <TableBody>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>Explorer</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.explorer}
                            </TableCell>

                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>Explorer API</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.explorer_api}
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>RPC</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.rpc}
                            </TableCell>

                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>WS</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.ws}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <Table size="small">
                        <TableBody>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>Block Endpoint</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.blockEndpoint}
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>Tx Endpoint</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.txEndpoint}
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>Address Endpoint</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.addressEndpoint}
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ border: 'none', padding: 0 }}
                            >
                              <strong>Token Endpoint</strong>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: 0 }}>
                              {networkId.tokenEndpoint}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
              <AccordionActions>
                <Button>Add Node</Button>
              </AccordionActions>
            </Accordion>
          ))}
        </List>
      </Box>
    </Container>
  );
}
