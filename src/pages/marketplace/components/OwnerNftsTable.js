import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from '@mui/material';

function createData(tokenId, denomId, nftName, creator, mintTime) {
  return {
    tokenId,
    denomId,
    nftName,
    creator,
    mintTime,
  };
}

function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <Link>{row.tokenId}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.denomId}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.nftName}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.creator}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.mintTime}</Link>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    tokenId: PropTypes.string.isRequired,
    denomId: PropTypes.string.isRequired,
    nftName: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    mintTime: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'editions599',
    'crye3e4g89f5...',
    'The Pawfect',
    'crye3e4g89f5...',
    '2021-12-17, 00:27:33 UTC'
  ),
  createData(
    'editions599',
    'crye3e4g89f5...',
    'The Pawfect',
    'crye3e4g89f5...',
    '2021-12-17, 00:27:33 UTC'
  ),
  createData(
    'editions599',
    'crye3e4g89f5...',
    'The Pawfect',
    'crye3e4g89f5...',
    '2021-12-17, 00:27:33 UTC'
  ),
  createData(
    'editions599',
    'crye3e4g89f5...',
    'The Pawfect',
    'crye3e4g89f5...',
    '2021-12-17, 00:27:33 UTC'
  ),
  createData(
    'editions599',
    'crye3e4g89f5...',
    'The Pawfect',
    'crye3e4g89f5...',
    '2021-12-17, 00:27:33 UTC'
  ),
  createData(
    'editions599',
    'crye3e4g89f5...',
    'The Pawfect',
    'crye3e4g89f5...',
    '2021-12-17, 00:27:33 UTC'
  ),
];

export default function OwnerNftsTable() {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Token ID</TableCell>
            <TableCell>Denom ID</TableCell>
            <TableCell>NFT Name</TableCell>
            <TableCell>Creator</TableCell>
            <TableCell>Mint Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
