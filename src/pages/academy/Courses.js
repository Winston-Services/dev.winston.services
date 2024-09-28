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
  Link,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { debounce } from '../../components/common/CommonFunction';
import { coursesSelector } from '../../store/academy';
import DropDown2 from './../../components/common/DropDown2';

function Courses() {
  const navigate = useNavigate();
  const courseData = useSelector(coursesSelector);
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
  }, [searchInput, courseData]);

  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems="center">
        <Grid display={'flex'} alignItems={'baseline'}>
          <Grid container item xs={12} display={'flex'}>
            <Link
              variant="subtitle1"
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Link>
            <Typography variant="subtitle1" mx={1.25}>
              /
            </Typography>
            <Link
              variant="subtitle1"
              onClick={() => {
                navigate('/academy');
              }}
            >
              Academy
            </Link>
            <Typography variant="subtitle1" mx={1.25}>
              /
            </Typography>

            <Typography variant="subtitle1" mx={1.25}>
              Courses
            </Typography>
          </Grid>
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
              <Grid key={index} item xs={12} sm={6} md={4} sx={{ cursor: 'pointer' }}>
                <Paper
                  elevation={0}
                  sx={{ p: 3 }}
                  onClick={() => navigate(`/academy/details/${item.id}`)}
                >
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
              onClick={() => navigate('/academy/add-course')}
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
                cursor: 'pointer',
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
