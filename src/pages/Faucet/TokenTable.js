import * as React from 'react';

import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  tableCellClasses,
  Typography,
  Table,
  Grid,
  styled,
} from '@mui/material';
import { PropTypes } from 'prop-types';

import TotalTokens from '../../assets/total_tokens.svg';
import TotalTokensGiven from '../../assets/total_tokens_given.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#362A70',
    color: theme.palette.common.white,
    border: 0,
    size: 'large',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
    color: theme.palette.common.white,
  },
}));

export default function TokenTable({ name, rows }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
        overflowX: 'auto',
      }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <Typography variant="h6">{name}</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Grid container>
                <img src={TotalTokens} alt="icon" />
                <Typography sx={{ fontSize: '0.625rem' }}>
                  Total Tokens
                </Typography>
              </Grid>
              <Typography>00000</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Grid container>
                <img src={TotalTokensGiven} alt="icon" />
                <Typography sx={{ fontSize: '0.625rem' }}>
                  Total Tokens Given
                </Typography>
              </Grid>
              <Typography>00000</Typography>
            </StyledTableCell>
          </TableRow>
          {rows?.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell>
                <Grid container spacing={2}>
                  <Grid item>
                    <img src={row.icon} alt="icon" />
                  </Grid>
                  <Grid item>
                    <Typography>{row.name}</Typography>
                  </Grid>
                </Grid>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="subtitle2">Tokens</Typography>
                <Typography>{row.tokens}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="subtitle2">Given Away</Typography>
                <Typography>{row.givenAway}</Typography>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TokenTable.propTypes = {
  name: PropTypes.string,
  rows: PropTypes.array,
};
