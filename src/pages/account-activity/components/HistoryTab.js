import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Tab, Tabs, Box } from '@mui/material';
import { Typography, TextField, InputAdornment, Grid } from '@mui/material';
import { styled } from '@mui/system';

import { debounce } from '../../../components/common/CommonFunction';
import Table from '../../../components/common/Table';

const StyledTab = styled(Tab)(({ theme }) => ({
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: theme.spacing(2, 4),
  margin: theme.spacing(1),
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  justifyContent: 'center',
  color: theme.palette.common.white,
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:focus': {
    borderRadius: theme.shape.borderRadius,
  },
}));

const StyledTabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
}));

const StyledTabList = styled(Box)(({ theme }) => ({
  width: 'max-content',
  backgroundColor: '#271d5a',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'space-between',
  padding: theme.spacing(1),
}));

const historyColumns = [
  {
    id: 'date',
    headerName: 'Date',
  },
  {
    id: 'type',
    headerName: 'Type',
  },
  {
    id: 'item',
    headerName: 'Item',
  },
  {
    id: 'party',
    headerName: 'Party',
  },
  {
    id: 'amount',
    headerName: 'Amount',
  },
  {
    id: 'status',
    headerName: 'Status',
  },
];

const historyRows = [
  {
    id: 1,
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'PsychoMolly #3671',
    party: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
  {
    id: 2,
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'Abc #3671',
    party: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
  {
    id: 3,
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'Xyz #3671',
    party: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
];

export default function HistoryTab() {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(historyRows);
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    debounce(
      () =>
        setSearchData(
          searchInput
            ? historyRows.filter(
                (row) => row.item.toLowerCase().includes(searchInput.toLowerCase())
              )
            : historyRows
        ),
      500
    );
  }, [searchInput]);

  return (
    <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)} style={{ width: '100%' }}>
      <Grid
        container
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
        px={3}
        mb={2}
      >
        <Grid item>
          <StyledTabList>
            <StyledTab label="Balance History" />
            <StyledTab label="Purchase History" />
          </StyledTabList>
        </Grid>
        <Grid item>
          <TextField
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            variant="standard"
            hiddenLabel
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              borderRadius: '5px',
              width: '221px',
              background: '#271D5A',
            }}
          />
        </Grid>
      </Grid>
      <StyledTabPanel value={0}>
        {searchData && searchData.length !== 0 ? (
          <Table rows={searchData} columns={historyColumns} />
        ) : (
          <Typography textAlign={'center'}>
            No results for &apos;{searchInput}&apos;
          </Typography>
        )}
      </StyledTabPanel>
      <StyledTabPanel value={1}>
        {searchData && searchData.length !== 0 ? (
          <Table rows={searchData} columns={historyColumns} />
        ) : (
          <Typography textAlign={'center'}>
            No results for &apos;{searchInput}&apos;
          </Typography>
        )}
      </StyledTabPanel>
    </Tabs>
  );
}
