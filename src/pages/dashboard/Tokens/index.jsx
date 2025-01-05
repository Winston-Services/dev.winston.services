import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import useApi from '../../../hooks/useApi';
import chainIdToNetworkName from '../../../utils/chainIdToNetworkName';


export const Tokens = () => {
  const [getTokens, { data, isLoading, isError }] =
    useApi().endpoints.getTokens.useLazyQuery();

  const handleRatingChange = (token) => {
    alert(`Thanks for rating ${token.name}!`);
    console.log(token);
    // TODO: update token rating and handle errors
  };

  React.useEffect(() => {
    getTokens();
  }, []);

  return (
    <Box>
      <Typography variant="h4">Listed Tokens</Typography>
      {isLoading && <Box>Loading...</Box>}
      {isError && <Box>Error</Box>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Chain Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Decimals</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((token) => (
            <TableRow key={token._id}>
              <TableCell>
                <img
                  src={token.icon}
                  alt="token logo"
                  style={{ width: 36, height: 36 }}
                />
              </TableCell>
              <TableCell>{chainIdToNetworkName[token.chainId] || 'Unknown' }</TableCell>
              <TableCell>{token.name}</TableCell>
              <TableCell>{token.symbol}</TableCell>
              <TableCell>{token.decimals}</TableCell>
              <TableCell>
                {token.rating}
                <Rating
                  defaultValue={3}
                  max={5}
                  onChange={() => handleRatingChange(token)}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  More...
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Tokens;
