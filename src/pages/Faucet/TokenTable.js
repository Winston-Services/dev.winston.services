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
} from '@mui/material';
import TotalTokens from '../../assets/total_tokens.svg';
import TotalTokensGiven from '../../assets/total_tokens_given.svg';
import { PropTypes } from 'prop-types';
import { Grid } from '@mui/material';
import { styled } from '@mui/styles';
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
      <TableContainer component={Paper} className="boxShadowNone bgTransparent">
        <Table aria-label="customized table">
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <Typography>{name}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid>
                  <img src={TotalTokens} alt="icon" />
                  <Typography>Total Tokens</Typography>
                </Grid>
                <Typography>00000</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid>
                  <img src={TotalTokensGiven} alt="icon" />
                  <Typography>Total Tokens Given</Typography>
                </Grid>
                <Typography>00000</Typography>
              </StyledTableCell>
            </TableRow>
            {rows?.map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell>
                  <img src={row.icon} alt="icon" />
                  <Typography>{row.name}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>Tokens</Typography>
                  <Typography>{row.tokens}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>Given Away</Typography>
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
