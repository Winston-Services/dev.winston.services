import { createSlice } from '@reduxjs/toolkit';

const publicNoticeSlice = createSlice({
  name: 'publicNotice',
  initialState: {
    proposals: [    {
      id: 1,
      category: 'Approved',
      image: 'ImageData1',
      title:
        'Winston Holdings and Trust',
      description:
        'A decentralized holding or trust that will be used to hold the assets of the community.',
      author: '@dreamingrainbow',
      infoTime: '3 yrs ago',
      infoTitle: 'Ref Link: A',
      infoSubTitle: 'Ref Link: B',
      date: 'Sept 11, 2021',
    }],
  },
  reducers: {
    setProposals: (state, action) => {
      state.proposals = action.payload;
    },
  },
});

export const { setProposals } = publicNoticeSlice.actions;
    
export const proposalsSelector = (state) => state.publicNotice.proposals;

export default publicNoticeSlice.reducer;

