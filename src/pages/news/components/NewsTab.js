import React, { useState } from 'react';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { topNewsSelector, currentNewsSelector } from '../../../store/news';
import ImageData1 from './../../../assets/news_tab_image_1.png';
import ImageData2 from './../../../assets/news_tab_image_2.png';
import ImageData3 from './../../../assets/news_tab_image_3.png';
import ImageData4 from './../../../assets/news_tab_image_4.png';
import NewsTabData from './NewsTabData';

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
        <Box component={'span'} sx={{ mt: '30px' }}>
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

function NewsTab() {
  const topNews = useSelector(topNewsSelector);
  const currentNews = useSelector(currentNewsSelector);
  const images =  {
    ImageData1,
    ImageData2,
    ImageData3,
    ImageData4,
  };
  const AllNewsData = [...topNews.map(article => {
    const newArticle = {
      ...article,
      image: images[article.image],
    }
    return newArticle;
  }), ...currentNews.map(article => {
    const newArticle = {
      ...article,
      image: images[article.image],
    }
    return newArticle;
  })];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ ...tabIndicatorStyle }}
      >
        <Tab label="All news" {...a11yProps(0)} />
        <Tab label="Business" {...a11yProps(1)} />
        <Tab label="Markets" {...a11yProps(2)} />
        <Tab label="Technology" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NewsTabData data={AllNewsData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewsTabData data={AllNewsData.filter((item) => item.category === 'Business')} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewsTabData data={AllNewsData.filter((item) => item.category === 'Markets')} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NewsTabData data={AllNewsData.filter((item) => item.category === 'Technology')} />
      </TabPanel>
    </Box>
  );
}

export default NewsTab;
