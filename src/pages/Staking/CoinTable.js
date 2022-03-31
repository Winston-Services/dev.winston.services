import * as React from 'react';

import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  tableCellClasses,
  Container,
  Grid,
  Divider,
} from '@mui/material';
import { PropTypes } from 'prop-types';

import TotalTokens from '../../assets/total_tokens.svg';
import TotalTokensGiven from '../../assets/total_tokens_given.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#362A70',
    color: theme.palette.common.white,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
    color: theme.palette.common.white,
  },
}));

export default function CoinTable({ name, rows }) {
  return (
    <Container>
      <TableContainer component={Paper} sx={{ p: 4, boxShadow: 'none' }}>
        <Table aria-label="customized table">
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <Typography variant="h6">Stack and {name}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid container item xs={12}>
                  <img src={TotalTokens} alt="icon" />
                  <Typography sx={{ fontSize: '0.725rem' }}>
                    Amount {name}
                  </Typography>
                </Grid>
                <Typography>00000</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid container item xs={12}>
                  <img src={TotalTokensGiven} alt="icon" />
                  <Typography sx={{ fontSize: '0.725rem' }}>Balance</Typography>
                </Grid>
                <Typography>00000</Typography>
              </StyledTableCell>
            </TableRow>
            <Divider sx={{ width: '220%' }} />
            <TableRow>
              <StyledTableCell>
                <Typography>Coin</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>Amount {name}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>Balance</Typography>
              </StyledTableCell>
            </TableRow>
            <Divider sx={{ width: '220%' }} />
            {rows?.map((row) => (
              <>
                <TableRow key={row.name}>
                  <StyledTableCell>
                    <Grid container spacing={1}>
                      <img src={row.icon} alt="icon" />
                      <Typography>{row.name}</Typography>
                    </Grid>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="subtitle2">Tokens</Typography>
                    <Typography variant="h6">{row.tokens}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="subtitle2">Given Away</Typography>
                    <Typography variant="h6">{row.givenAway}</Typography>
                  </StyledTableCell>
                </TableRow>
                <Divider sx={{ width: '220%' }} />
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

CoinTable.propTypes = {
  name: PropTypes.string,
  rows: PropTypes.array,
};
