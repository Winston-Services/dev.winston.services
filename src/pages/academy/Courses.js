import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  InputAdornment,
  TextField,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

import CourseImage1 from './../../assets/course_image1.png';

// import DropDown2 from './../../components/common/DropDown2';

function Courses() {
  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h5">Courses</Typography>
        <Grid alignItems={'center'}>
          <TextField
            // value={searchInput}
            // onChange={(e) => setSearchInput(e.target.value)}
            sx={{
              backgroundColor: '#362A70',
              mt: { xs: 1.5, sm: 0 },
              borderRadius: '5px',
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
          {/* <DropDown2 options={['Newest', 'Oldest']} placeholder={'Select'} /> */}
        </Grid>
      </Grid>
      <Grid container mt={3}>
        <Grid item md={4}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Grid container>
              <img src={CourseImage1} alt="" height="54px" width="54px" />
              <Grid>
                <Typography variant="h6">Video title here</Typography>
                <Typography variant="subtitle2">
                  Published on 26-04-2022 | 05:00PM{' '}
                </Typography>
              </Grid>
            </Grid>
            {/* <Typography variant="h6">Video title here</Typography>
            <Typography variant="subtitle2" mt={1.3}>
              Published on 26-04-2022 | 05:00PM{' '}
            </Typography> */}
          </Paper>
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Container>
  );
}

export default Courses;
