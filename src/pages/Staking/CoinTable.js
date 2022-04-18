import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  Grid,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
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

export default function CoinTable({ name, rows }) {
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
              <Typography variant="h6">Stack and {name}</Typography>
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
    // <Container>
    //   <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
    //     <Table aria-label="customized table">
    //       <TableBody>
    //         <TableRow>
    //           <TableCell>
    //             <Typography variant="h6">Stack and {name}</Typography>
    //           </TableCell>
    //           <TableCell>
    //             <Grid container item xs={12}>
    //               <img src={TotalTokens} alt="icon" />
    //               <Typography sx={{ fontSize: '0.725rem' }}>
    //                 Amount {name}
    //               </Typography>
    //             </Grid>
    //             <Typography>00000</Typography>
    //           </TableCell>
    //           <TableCell>
    //             <Grid container item xs={12}>
    //               <img src={TotalTokensGiven} alt="icon" />
    //               <Typography sx={{ fontSize: '0.725rem' }}>Balance</Typography>
    //             </Grid>
    //             <Typography>00000</Typography>
    //           </TableCell>
    //         </TableRow>
    //         <TableRow>
    //           <TableCell>
    //             <Typography>Coin</Typography>
    //           </TableCell>
    //           <TableCell>
    //             <Typography>Amount {name}</Typography>
    //           </TableCell>
    //           <TableCell>
    //             <Typography>Balance</Typography>
    //           </TableCell>
    //         </TableRow>
    //         {rows?.map((row) => (
    //           <React.Fragment key={row.name + name}>
    //             <TableRow
    //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //             >
    //               <TableCell>
    //                 <Grid container spacing={1}>
    //                   <img src={row.icon} alt="icon" />
    //                   <Typography>{row.name}</Typography>
    //                 </Grid>
    //               </TableCell>
    //               <TableCell>
    //                 <Typography variant="subtitle2">Tokens</Typography>
    //                 <Typography variant="h6">{row.tokens}</Typography>
    //               </TableCell>
    //               <TableCell>
    //                 <Typography variant="subtitle2">Given Away</Typography>
    //                 <Typography variant="h6">{row.givenAway}</Typography>
    //               </TableCell>
    //             </TableRow>
    //           </React.Fragment>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Container>
  );
}

CoinTable.propTypes = {
  name: PropTypes.string,
  rows: PropTypes.array,
};
