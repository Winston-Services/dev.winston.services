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

import { debounce } from '../../../components/common/CommonFunction';
import CommonTable from '../../../components/common/Table';

export const CompletedCourses = () => {
  const columns = [
    {
      id: 'courseTitle',
      headerName: 'Course Title',
    },
    {
      id: 'for',
      headerName: 'For',
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
      courseTitle: 'Learn how to design NFT cards',
      for: 'Beginner',
      uploadDate: '01/04/2023',
      status: 'Rejected',
    },
    {
      id: 2,
      courseTitle: 'Learn how to design NFT cards1',
      for: 'Basics',
      uploadDate: '02/04/2023',
      status: 'Approved',
    },
    {
      id: 3,
      courseTitle: 'Learn how to design NFT cards2',
      for: 'Intermediary',
      uploadDate: '03/04/2023',
      status: 'Pending',
    },
    {
      id: 4,
      courseTitle: 'Learn how to design NFT cards3',
      for: 'Expert',
      uploadDate: '04/05/2022',
      status: 'Rejected',
    },
    {
      id: 5,
      courseTitle: 'Learn how to design NFT cards4',
      for: 'Beginner',
      uploadDate: '05/05/2022',
      status: 'Approved',
    },
    {
      id: 6,
      courseTitle: 'Learn how to design NFT cards5',
      for: 'Intermediary',
      uploadDate: '06/05/2022',
      status: 'Approved',
    },
  ];
  

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
                return row.courseTitle
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              })
            : rows
        ),
      500
    );
  }, [searchInput]);

  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems="center">
        <Typography variant="h5">Completed Courses</Typography>
        <Grid display={'flex'} alignItems={'baseline'}>
          <TextField
            autoComplete="off"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            sx={{
              backgroundColor: '#362A70',
              mt: { xs: 1.5, sm: 0 },
              borderRadius: '5px',
              height: '47px',
              mr: 2,
              px: 2,
            }}
            variant="standard"
            hiddenLabel
            color="filled"
            placeholder="Search "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              disableUnderline: true,
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
                          {row.courseTitle}
                        </Grid>
                      </TableCell>
                      <TableCell>{row.for}</TableCell>
                      <TableCell>{row.uploadDate}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color:
                              row.status === 'Rejected'
                                ? '#F84335'
                                : row.status === 'Pending'
                                ? '#FFC107'
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

export default CompletedCourses;
