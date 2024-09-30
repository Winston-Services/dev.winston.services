import React from 'react';

import { Typography, Box, Tabs, Tab, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import AcademyImage from './../../../assets/academy_image.svg';
import BeginnerIcon from './../../../assets/beginner_icon.svg';
import ExpertIcon from './../../../assets/expert_icon.svg';
import IntermediateIcon from './../../../assets/intermediate_icon.svg';
import AutoCompleteSearchBar from './../../../components/common/AutoCompleteSearchBar';
import AcademyCard from './common/AcademyCard';

const academyData = [
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan1 and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
    difficultyLevel: 'Intermediate',
    difficultyLevelIcon: IntermediateIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan2 and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
    difficultyLevel: 'Expert',
    difficultyLevelIcon: ExpertIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan3 and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan4 and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan5 and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
];

const courseData = [
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    rewardPoint: 80,
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan1 and How to Use It?',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    rewardPoint: 80,
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan2 and How to Use It?',
    difficultyLevel: 'Intermediate',
    difficultyLevelIcon: IntermediateIcon,
    rewardPoint: 80,
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan3 and How to Use It?',
    difficultyLevel: 'Expert',
    difficultyLevelIcon: ExpertIcon,
    rewardPoint: 80,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: '30px' }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TeacherProfileTabs() {
  const [value, setValue] = React.useState(0);

  const [searchInput, setSearchInput] = React.useState('');
  const [searchCourseData, setSearchCourseData] = React.useState(courseData);
  const [searchAcademyData, setSearchAcademyData] = React.useState(academyData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ ...tabIndicatorStyle }}
        >
          <Tab label="Recently Added" {...a11yProps(0)} />
          <Tab label="All Videos" {...a11yProps(1)} />
          <Tab label="Courses" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <>
          <AutoCompleteSearchBar
            data={academyData}
            searchBy="title"
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchData={setSearchAcademyData}
          />
          <Grid container spacing={4} mt={1}>
            {searchAcademyData && searchAcademyData.length !== 0 ? (
              searchAcademyData.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  key={item.title + index}
                >
                  <AcademyCard item={item} />
                </Grid>
              ))
            ) : (
              <Typography textAlign={'center'} width="100%">
                No results for &apos;{searchInput}&apos;
              </Typography>
            )}
          </Grid>
        </>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <>
          <AutoCompleteSearchBar
            data={academyData}
            searchBy="title"
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchData={setSearchAcademyData}
          />
          <Grid container spacing={4} mt={1}>
            {searchAcademyData && searchAcademyData.length !== 0 ? (
              searchAcademyData.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  key={item.title + index}
                >
                  <AcademyCard item={item} />
                </Grid>
              ))
            ) : (
              <Typography textAlign={'center'} width="100%">
                No results for &apos;{searchInput}&apos;
              </Typography>
            )}
          </Grid>
        </>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <>
          <AutoCompleteSearchBar
            data={courseData}
            searchBy="title"
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchData={setSearchCourseData}
          />
          <Grid container spacing={4} mt={1}>
            {searchCourseData && searchCourseData.length !== 0 ? (
              searchCourseData.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  key={item.title + index}
                >
                  <AcademyCard item={item} />
                </Grid>
              ))
            ) : (
              <Typography textAlign={'center'} width="100%">
                No results for &apos;{searchInput}&apos;
              </Typography>
            )}
          </Grid>
        </>
      </TabPanel>
    </Box>
  );
}

export default TeacherProfileTabs;
