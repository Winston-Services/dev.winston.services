import React from 'react';

import { Grid } from '@mui/material';

import ImageData1 from './../../assets/news_tab_image_1.png';
import ImageData2 from './../../assets/news_tab_image_2.png';
import ImageData3 from './../../assets/news_tab_image_3.png';
import ImageData4 from './../../assets/news_tab_image_4.png';
import NewsCard from './NewsCard';

function AllNewsTabData() {
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
  return (
    <Grid container>
      {AllNewsData.map((item, index) => {
        return (
          <Grid key={index} mt={2}>
            <NewsCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default AllNewsTabData;
