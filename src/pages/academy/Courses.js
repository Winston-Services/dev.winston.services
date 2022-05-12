import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  InputAdornment,
  TextField,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from '@mui/material';

import { debounce } from '../../components/common/CommonFunction';
import CourseImage1 from './../../assets/course_image1.png';
import DropDown2 from './../../components/common/DropDown2';

const courseData = [
  {
    image: CourseImage1,
    title: 'Video title here',
    date: '26-04-2022',
    time: '05:00PM',
    progress: 10,
  },
  {
    image: CourseImage1,
    title: 'Video title1 here',
    date: '26-04-2022',
    time: '05:00OPM',
    progress: 30,
  },
  {
    image: CourseImage1,
    title: 'Video title2 here',
    date: '26-04-2022',
    time: '05:00PM',
    progress: 100,
  },
  {
    image: CourseImage1,
    title: 'Video title3 here',
    date: '26-04-2022',
    time: '05:00PM',
    progress: 50,
  },
  {
    image: CourseImage1,
    title: 'Video title4 here',
    date: '26-04-2022',
    time: '05:00PM',
    progress: 80,
  },
  {
    image: CourseImage1,
    title: 'Video title5 here',
    date: '26-04-2022',
    time: '05:00PM',
    progress: 20,
  },
];

function Courses() {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(courseData);

  React.useEffect(() => {
    debounce(
      () =>
        setSearchData(
          searchInput
            ? courseData.filter((row) => {
                return row.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              })
            : courseData
        ),
      500
    );
  }, [searchInput]);

  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems="center">
        <Typography variant="h5">Courses</Typography>
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
                  <SearchIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />

          <DropDown2 options={['Newest', 'Oldest']} placeholder={'Select'} />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={3}>
        {searchData && searchData.length !== 0 ? (
          <>
            {searchData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Paper elevation={0} sx={{ p: 3 }}>
                  <Grid container gap={2} alignItems="center">
                    <img src={item.image} alt="" width="54px" />
                    <Grid>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="subtitle2" mt={1}>
                        {' Published on  ' + item.date + '  |  ' + item.time}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container mt={3} justifyContent="space-between">
                    <Typography fontSize="12px">
                      {item.progress + '% complete'}
                    </Typography>
                    <Typography fontSize="12px">Finish your course</Typography>
                  </Grid>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    sx={{ background: '#271D5A', mt: 1 }}
                  />
                </Paper>
              </Grid>
            ))}
            <Paper
              elevation={0}
              sx={{
                mt: 3,
                mx: 3,
                px: 4,
                height: '164px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AddIcon sx={{ fontSize: '28px', mb: 2 }} />
              <Typography textAlign={'center'} variant="subtitle2">
                Create new course
              </Typography>
            </Paper>
          </>
        ) : (
          <Grid container justifyContent={'center'}>
            <Typography>No results for &apos;{searchInput}&apos;</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Courses;
