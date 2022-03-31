import * as React from 'react';

import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { Chip, Grid, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function createData(
  transaction,
  from,
  fromType,
  to,
  value,
  fee,
  blockAmt,
  blockTime
) {
  return {
    transaction,
    from,
    fromType,
    to,
    value,
    fee,
    blockAmt,
    blockTime,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell sx={{ p: 0 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RemoveIcon
                sx={{ background: '#EF5DA8', borderRadius: '25px' }}
              />
            ) : (
              <AddIcon sx={{ background: '#EF5DA8', borderRadius: '25px' }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell>
          <Grid display={'flex'} direction="column">
            <Link>{row.transaction}</Link>
            <Grid mt={1}>
              <Chip variant="filled" label="Transfer NFT" />
            </Grid>
          </Grid>
        </TableCell>
        <TableCell>
          <Grid display={'flex'} direction="column">
            <Link>{row.from}</Link>
            <Grid mt={1}>
              <Chip
                variant="filled"
                color={row.fromType === 'IN' ? 'success' : 'error'}
                label={row.fromType}
              />
            </Grid>
          </Grid>
        </TableCell>
        <TableCell>
          <Link>{row.to}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.value}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.fee}</Link>
        </TableCell>
        <TableCell>
          <Grid display={'flex'}>
            <CheckCircleIcon />
            <Grid ml={1}>
              <Link>{row.blockAmt}</Link>
              <Typography>{row.blockTime}</Typography>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Typography variant="h6" gutterBottom component="div">
                Coming Soon...!
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    transaction: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    fromType: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired,
    blockAmt: PropTypes.string.isRequired,
    blockTime: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'IN',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'OUT',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'IN',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'IN',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'IN',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'IN',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
  createData(
    '4B5DF2E88EA...',
    'crye3e4g89f5...',
    'IN',
    'crye3e4g89f5...',
    '- -',
    '9625',
    '3,666,142',
    '2021-12'
  ),
];

export default function OwnerTransactionsTable() {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Transaction</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Fee</TableCell>
            <TableCell>Block</TableCell>
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
