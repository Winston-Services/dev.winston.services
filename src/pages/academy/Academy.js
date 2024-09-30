import React from 'react';

import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import AutoCompleteSearchBar from '../../components/common/AutoCompleteSearchBar';
import { coursesSelector } from '../../store/academy';
import AcademyIcon from './../../assets/academy_icon.svg';
import Filter from './../../components/common/Filter';
import AcademyCard from './components/common/AcademyCard';

function Academy() {
  
  const topicFilter = [
    'Altcoin',
    'Music',
    'Domain Names',
    'Music',
    'Photography',
    'Sports',
    'Trading Cards',
    'Utility',
    'Virtual Worlds',
  ];
  
  const filterPanels = [
    {
      summaryText: 'Sort',
      summaryCount: 0,
      detailsComponent: <Typography>Sort Filter Coming Soon...!</Typography>,
    },
    {
      summaryText: 'Topic',
      summaryCount: 0,
      detailsComponent: (
        <>
          {topicFilter.map((item, index) => (
            <Chip
              variant="filled"
              key={item + index}
              label={item}
              onClick={() => {
                console.log('first');
              }}
              sx={{ mr: 1.25, mt: 1.25 }}
            />
          ))}
        </>
      ),
    },
    {
      summaryText: 'Difficulty',
      summaryCount: 0,
      detailsComponent: (
        <Typography>Difficulty Filter Coming Soon...!</Typography>
      ),
    },
    {
      summaryText: 'Price',
      summaryCount: 0,
      detailsComponent: (
        <>
          <Typography>Price Filter Coming Soon...!</Typography>
        </>
      ),
    },
    {
      summaryText: 'Rating',
      summaryCount: 0,
      detailsComponent: <Typography>Rating Filter Coming Soon...!</Typography>,
    },
  ];
  
  const academyData = useSelector(coursesSelector);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(academyData);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Container>
        <Grid container columnSpacing={3}>
          <Grid
            item
            xl={12}
            container
            mb={5}
            columnSpacing={3}
            alignItems="center"
          >
            <Grid item xl={4} display="flex">
              <Typography variant="h3" textAlign="center">
                Academy
              </Typography>
            </Grid>
            <Grid item xl={8}>
              <AutoCompleteSearchBar
                data={academyData}
                searchBy="title"
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSearchData={setSearchData}
              />
            </Grid>
          </Grid>
          <Grid item xl={4}>
            <Filter
              toggleDrawer={toggleDrawer}
              openDrawer={openDrawer}
              filterPanels={filterPanels}
            />
          </Grid>
          <Grid item xl={8}>
            <Grid container spacing={3}>
              {searchData && searchData.length !== 0 ? (
                searchData.map((item, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={item.title + index}>
                    <AcademyCard item={item} />
                  </Grid>
                ))
              ) : (
                <Typography textAlign={'center'} width="100%">
                  No results for &apos;{searchInput}&apos;
                </Typography>
              )}
            </Grid>
            <Grid container justifyContent={'center'} mt={5}>
              <Button variant="outlined">Load more courses</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Paper elevation={0} sx={{ py: 10, mt: 10, borderRadius: 0 }}>
        <Container>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={3}
            display="flex"
            alignItems="center"
          >
            <Grid item md={6.5}>
              <Typography variant="h3">Add course</Typography>
              <Typography variant="subtitle1" mt={3}>
                Begin your journey as an educator and help someone learn
                something you already know. Winston Academy is about helping
                each other learn.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  mt: { xs: 5, md: 12.4 },
                  mb: 5,
                  width: { xs: '100%', sm: 'auto' },
                }}
                onClick={() => navigate('/academy/add-course')}
              >
                Add course
              </Button>
            </Grid>
            <Grid item md={5.5}>
              <img src={AcademyIcon} style={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Academy;
