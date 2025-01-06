import React from 'react';

import { PlayCircleFilled, Search } from '@mui/icons-material';
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  InputAdornment,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

import { debounce } from '../../components/common/CommonFunction';
import CommonTable from '../../components/common/Table';

const columns = [
  {
    id: 'proposal',
    headerName: 'Proposal',
  },
  {
    id: 'uploadDate',
    headerName: 'Upload date',
  },
  {
    id: 'status',
    headerName: 'Status',
  },
];

const rows = [
  {
    id: 1,
    proposal: 'The first Ahwa Proposal',
    uploadDate: '01/04/2023',
    status: 'Rejected',
  },
  {
    id: 2,
    proposal: 'The second Ahwa Proposal',
    uploadDate: '02/04/2023',
    status: 'Approved',
  },
  {
    id: 3,
    proposal: 'Another Ahwa Proposal',
    uploadDate: '03/04/2023',
    status: 'Pending',
  },
  {
    id: 4,
    proposal: 'First Test Ahwa Proposal',
    uploadDate: '04/05/2022',
    status: 'Rejected',
  },
  {
    id: 5,
    proposal: 'Test Ahwa Proposal',
    uploadDate: '05/05/2022',
    status: 'OnGoing',
  },
  {
    id: 6,
    proposal: 'Test Two Ahwa Proposal',
    uploadDate: '06/05/2022',
    status: 'Approved',
  },
];

function AhwaProposals() {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(rows);

  const SortbyNewestFirst = (array) =>
    array.sort(function (a, b) {
      return new Date(a.uploadDate) - new Date(b.uploadDate);
    });
  const SortbyOldestFirst = (array) =>
    array &&
    array.sort(function (a, b) {
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    });

  const [SortingValue, setSortingValue] = React.useState('');
  const handleSorting = (e) => {
    setSortingValue(e.target.value);
    console.log(e.target.value, SortingValue);
    switch (e.target.value) {
      case 'newestFirst':
        setSearchData(SortbyNewestFirst(searchData));
        break;
      case 'oldestFirst':
        setSearchData(SortbyOldestFirst(searchData));
        break;
      default:
        setSearchData(rows);
    }
  };

  React.useEffect(() => {
    debounce(
      () =>
        setSearchData(
          searchInput
            ? rows.filter((row) => {
                return row.proposal
                  .toLowerCase()
                  .match(searchInput.toLowerCase());
              })
            : rows
        ),
      500
    );
  }, [searchInput]);

  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems="center">
        <Typography variant="h5">Ahwa Proposals</Typography>
        <Grid display={'flex'} alignItems={'baseline'}>
          <TextField
            autoComplete="off"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            
            variant="outlined"
            hiddenLabel
            placeholder="Search "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              // disableUnderline: true,
            }}
          />
          <FormControl>
            <Select
              value={SortingValue}
              onChange={handleSorting}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                background:
                  'linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)',
                borderRadius: '5px',
                height: '47px',
                width: '154px',
                border: 'none',
              }}
            >
              <MenuItem value="">{'Select'}</MenuItem>
              <MenuItem value="newestFirst">Oldest</MenuItem>
              <MenuItem value="oldestFirst">Newest</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Card elevation={0} sx={{ mt: 3, pb: 2 }}>
        {searchData && searchData.length !== 0 ? (
          <TableContainer sx={{ maxHeight: '100%' }}>
            <Table sx={{ minWidth: 900 }}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{ fontWeight: '600', fontSize: '16px' }}
                      key={column.id}
                    >
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {searchData && searchData.length != 0 ? (
                  searchData.map((row) => (
                    <TableRow
                      hover
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        <Grid
                          container
                          width="560px"
                          gap={1.5}
                          alignItems="center"
                        >
                          <PlayCircleFilled />
                          {row.proposal}
                        </Grid>
                      </TableCell>
                      <TableCell>{row.uploadDate}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color:
                              row.status === 'Rejected'
                                ? '#F84335'
                                : row.status === 'OnGoing'
                                ? '#FFC107'
                                : row.status === 'Approved'
                                ? '#23B000'
                                : '#23B000',
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <>
            <CommonTable columns={columns} />
            <Typography mt={2} textAlign={'center'}>
              No results for &apos;{searchInput}&apos;
            </Typography>
          </>
        )}
      </Card>
    </Container>
  );
}

export default AhwaProposals;
