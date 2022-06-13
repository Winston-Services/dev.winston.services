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
  Divider,
} from '@mui/material';
import { PropTypes } from 'prop-types';

import TotalTokens from '../../assets/total_tokens.svg';
import TotalTokensGiven from '../../assets/total_tokens_given.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#362A70',
    color: theme.palette.common.white,
    size: 'large',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}));

export default function TokenTable({ name, rows }) {
  return (
    <Paper>
      <Grid container justifyContent={'space-between'}>
        <Typography p={3} variant="h6">
          {name}
        </Typography>
        <Grid item display={'flex'} p={3}>
          <Grid>
            <Grid container>
              <img src={TotalTokens} alt="icon" />
              <Typography sx={{ fontSize: '0.625rem', ml: 0.5 }}>
                Total Tokens
              </Typography>
            </Grid>
            <Typography ml={2.5}>00000</Typography>
          </Grid>
          <Grid ml={7}>
            <Grid container>
              <img src={TotalTokensGiven} alt="icon" />
              <Typography sx={{ fontSize: '0.625rem', ml: 0.5 }}>
                Total Tokens Given
              </Typography>
            </Grid>
            <Typography ml={2.5}>00000</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none',
          overflowX: { xs: 'auto', sm: 'hidden' },
        }}
      >
        <Table sx={{ width: '100%' }} aria-label="customized table">
          <TableBody>
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
    </Paper>
  );
}

TokenTable.propTypes = {
  name: PropTypes.string,
  rows: PropTypes.array,
};
