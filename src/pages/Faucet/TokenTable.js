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
  Container,
  Grid,
} from '@mui/material';
import { styled } from '@mui/styles';
import { PropTypes } from 'prop-types';

import TotalTokens from '../../assets/total_tokens.svg';
import TotalTokensGiven from '../../assets/total_tokens_given.svg';

// import { DataGrid } from '@mui/x-data-grid';

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

export default function TokenTable({ name, rows }) {
  return (
    <Container>
      <TableContainer component={Paper} sx={{ p: 4, boxShadow: 'none' }}>
        <Table aria-label="customized table">
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <Typography>{name}</Typography>
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
    </Container>
  );
}

TokenTable.propTypes = {
  name: PropTypes.string,
  rows: PropTypes.array,
};
