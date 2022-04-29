import * as React from 'react';

import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, TextField, InputAdornment, Grid } from '@mui/material';
import { styled } from '@mui/system';

import { debounce } from '../../../components/common/CommonFunction';
import Table from '../../../components/common/Table';

const Tab = styled(TabUnstyled)`
  cursor: pointer;
  background-color: transparent;
  padding: 16px 32px;
  margin: 6px 6px;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  color: #fff;

  &:focus {
    border-radius: 40px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #31256c;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  width: max-content;
  background-color: #271d5a;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
const balanceHistoryColumns = [
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
    id: 'buyer',
    headerName: 'Buyer',
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

const balanceHistoryRows = [
  {
    id: 1,
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'PsychoMolly #3671',
    buyer: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
  {
    id: 2,
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'Abc #3671',
    buyer: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
  {
    id: 3,
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'Xyz #3671',
    buyer: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
];

const purchaseHistoryColumns = [
  {
    id: 'date',
    headerName: 'Date',
  },
  {
    id: 'order',
    headerName: 'Order #',
  },
  {
    id: 'item',
    headerName: 'Item',
  },
  {
    id: 'seller',
    headerName: 'Seller',
  },
  {
    id: 'paymentMethod',
    headerName: 'Payment Method',
  },
  {
    id: 'status',
    headerName: 'Status',
  },
];

const purchaseHistoryRows = [
  {
    id: 1,
    date: '13-03-2022',
    order: 'NFT Biding',
    item: 'PsychoMolly #3671',
    seller: 'DemoTest',
    paymentMethod: 'Cash',
    status: 'Debited',
  },
  {
    id: 2,
    date: '13-03-2022',
    order: 'NFT Biding',
    item: 'Pqr #3671',
    seller: 'DemoTest',
    paymentMethod: 'Cash',
    status: 'Debited',
  },
  {
    id: 3,
    date: '13-03-2022',
    order: 'NFT Biding',
    item: 'Mnq #3671',
    seller: 'DemoTest',
    paymentMethod: 'Cash',
    status: 'Debited',
  },
];
export default function HistoryTab() {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(balanceHistoryRows);
  const [isHistory, setIsHistory] = React.useState(true);

  React.useEffect(() => {
    debounce(
      () =>
        setSearchData(
          searchInput
            ? (isHistory ? balanceHistoryRows : purchaseHistoryRows).filter(
                (row) => {
                  return row.item
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                }
              )
            : isHistory
            ? balanceHistoryRows
            : purchaseHistoryRows
        ),
      500
    );
  }, [isHistory, searchInput]);

  return (
    <TabsUnstyled defaultValue={0} style={{ width: '100%' }}>
      <Grid
        container
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
        px={3}
        mb={2}
      >
        <Grid item>
          <TabsList>
            <Tab
              onClick={() => {
                setIsHistory(true);
                setSearchInput('');
                setSearchData(balanceHistoryRows);
                return;
              }}
            >
              <Typography variant="subtitle2">Balance History</Typography>
            </Tab>
            <Tab
              onClick={() => {
                setIsHistory(false);
                setSearchInput('');
                setSearchData(purchaseHistoryRows);
                return;
              }}
            >
              <Typography variant="subtitle2">Purchase History</Typography>
            </Tab>
          </TabsList>
        </Grid>
        <Grid item>
          <TextField
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            variant="standard"
            hiddenLabel
            fullWidth
            color="filled"
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
      <TabPanel value={0}>
        {searchData && searchData.length !== 0 ? (
          <Table rows={searchData} columns={balanceHistoryColumns} />
        ) : (
          <Typography textAlign={'center'}>
            No results for &apos;{searchInput}&apos;
          </Typography>
        )}
      </TabPanel>
      <TabPanel value={1}>
        {searchData && searchData.length !== 0 ? (
          <Table rows={searchData} columns={purchaseHistoryColumns} />
        ) : (
          <Typography textAlign={'center'}>
            No results for &apos;{searchInput}&apos;
          </Typography>
        )}
      </TabPanel>
    </TabsUnstyled>
  );
}
