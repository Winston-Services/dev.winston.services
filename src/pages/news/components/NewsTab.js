import React, { useState } from 'react';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import ImageData1 from './../../../assets/news_tab_image_1.png';
import ImageData2 from './../../../assets/news_tab_image_2.png';
import ImageData3 from './../../../assets/news_tab_image_3.png';
import ImageData4 from './../../../assets/news_tab_image_4.png';

const NewsTabData = React.lazy(() => import('./NewsTabData'));

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

const AllNewsData = [
  {
    image: ImageData1,
    title:
      'The Non-Fungible Token Bible Everything you need to know about NFTs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
    infoTag: 'Jordan Lyanchev-CryptoPotato',
    infoTime: '2 hrs ago',
    infoTitle: 'Goldman Sachs',
    infoSubTitle: 'Goldman Sachs',
  },
  {
    image: ImageData2,
    title:
      'The Non-Fungible Token Bible Everything you need to know about NFTs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
    infoTag: 'Jordan Lyanchev-CryptoPotato',
    infoTime: '3 hrs ago',
    infoTitle: 'Goldman Sachs',
    infoSubTitle: 'Goldman Sachs',
  },
  {
    image: ImageData3,
    title:
      'The Non-Fungible Token Bible Everything you need to know about NFTs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
    infoTag: 'Jordan Lyanchev-CryptoPotato',
    infoTime: '3 hrs ago',
    infoTitle: 'Goldman Sachs',
    infoSubTitle: 'Goldman Sachs',
  },
  {
    image: ImageData4,
    title:
      'The Non-Fungible Token Bible Everything you need to know about NFTs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
    infoTag: 'Jordan Lyanchev-CryptoPotato',
    infoTime: '3 hrs ago',
    infoTitle: 'Goldman Sachs',
    infoSubTitle: 'Goldman Sachs',
  },
];

function NewsTab() {
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
        <Tab label="Bussiness" {...a11yProps(1)} />
        <Tab label="Markets" {...a11yProps(2)} />
        <Tab label="Technology" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NewsTabData data={AllNewsData} />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </Box>
  );
}

export default NewsTab;
