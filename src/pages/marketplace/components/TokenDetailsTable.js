import * as React from 'react';
import PropTypes from 'prop-types';
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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Chip, Grid, Link } from '@mui/material';

function createData(transaction, blockAmt, blockTime, from, to) {
  return {
    transaction,
    blockAmt,
    blockTime,
    from,
    to,
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
        <TableCell component="th" scope="row">
          <Grid display={'flex'} direction="column">
            <Link>{row.transaction}</Link>
            <Grid mt={1}>
              <Chip variant="filled" label="Transfer NFT" />
            </Grid>
          </Grid>
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
        <TableCell>
          <Link>{row.from}</Link>
        </TableCell>
        <TableCell>
          <Link>{row.to}</Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
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
    blockAmt: PropTypes.string.isRequired,
    blockTime: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    '4B5DF2E8817AEA...',
    '3,666,142',
    '2021-12-17, 00:27:33 UTC',
    'cro1vaye3e4gn89f5...',
    'cro1vaye3e4gn89f5...'
  ),
  createData(
    '4B5DF2E8817AEA...',
    '3,666,142',
    '2021-12-17, 00:27:33 UTC',
    'cro1vaye3e4gn89f5...',
    'cro1vaye3e4gn89f5...'
  ),
  createData(
    '4B5DF2E8817AEA...',
    '3,666,142',
    '2021-12-17, 00:27:33 UTC',
    'cro1vaye3e4gn89f5...',
    'cro1vaye3e4gn89f5...'
  ),
  createData(
    '4B5DF2E8817AEA...',
    '3,666,142',
    '2021-12-17, 00:27:33 UTC',
    'cro1vaye3e4gn89f5...',
    'cro1vaye3e4gn89f5...'
  ),
  createData(
    '4B5DF2E8817AEA...',
    '3,666,142',
    '2021-12-17, 00:27:33 UTC',
    'cro1vaye3e4gn89f5...',
    'cro1vaye3e4gn89f5...'
  ),
];

export default function TokenDetailsTable() {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Transaction</TableCell>
            <TableCell>Block</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
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
