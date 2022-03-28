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
} from '@mui/material';
import TotalTokens from '../../assets/total_tokens.svg';
import TotalTokensGiven from '../../assets/total_tokens_given.svg';
import { PropTypes } from 'prop-types';

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
      <TableContainer component={Paper} sx={{ p: 2 }}>
        <Table aria-label="customized table">
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <Typography>Stack and {name}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid>
                  <img src={TotalTokens} alt="icon" />
                  <Typography>Amount {name}</Typography>
                </Grid>
                <Typography>00000</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid>
                  <img src={TotalTokensGiven} alt="icon" />
                  <Typography>Balance</Typography>
                </Grid>
                <Typography>00000</Typography>
              </StyledTableCell>
            </TableRow>
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
            {rows?.map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell>
                  <img src={row.icon} alt="icon" />
                  <Typography>{row.name}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{row.tokens}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{row.givenAway}</Typography>
                </StyledTableCell>
              </TableRow>
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
