import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topNews: [
    {
      category: 'Business',
      image: 'ImageData1',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '2 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
    {
      category: 'Business',
      image: 'ImageData2',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '2 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
    {
      category: 'Markets',
      image: 'ImageData1',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '2 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
    {
      category: 'Technology',
      image: 'ImageData1',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '2 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
  ],
  currentNews: [
    {
      category: 'Business',
      image: 'ImageData1',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '2 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
    {
      category: 'Business',
      image: 'ImageData2',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '3 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
    {
      category: 'Markets',
      image: 'ImageData3',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '3 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
    {
      category: 'Technology',
      image: 'ImageData4',
      title:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
      infoTag: 'Jordan Lyanchev-CryptoPotato',
      infoTime: '3 hrs ago',
      infoTitle: 'Goldman Sachs',
      infoSubTitle: 'Goldman Sachs',
      date: 'March 18, 2022',
    },
  ],
  currentArticle: {
    category: 'Business',
    image: 'ImageData1',
    title:
      'The Non-Fungible Token Bible Everything you need to know about NFTs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero vitae cursus velit sed id. Id laoreet volutpat lorem nibh lacinia dictumst volutpat facilisi. Urna, purus pretium cursus quis sit venenatis lobortis adipiscing quam. Integer id ac etiam odio at nec viverra.',
    infoTag: 'Jordan Lyanchev-CryptoPotato',
    infoTime: '2 hrs ago',
  },
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setTopNews: (state, action) => {
      state.topNews = action.payload;
    },
    setCurrentNews: (state, action) => {
      state.currentNews = action.payload;
    },
    setCurrentArticle: (state, action) => {
      state.currentArticle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTopNews, setCurrentNews, setCurrentArticle } =
  newsSlice.actions;
export const topNewsSelector = (state) => state.news.topNews;
export const currentNewsSelector = (state) => state.news.currentNews;
export const currentArticleSelector = (state) => state.news.currentArticle;
const news = newsSlice.reducer;
export default news;
