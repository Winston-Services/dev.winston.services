import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import useToolbar from '../../hooks/useToolbar';
import ActiveCourses from '../dashboard/academy/ActiveCourses';
import AddDomain from './admin/domains/AddDomain';
import ViewDomains from './admin/domains/ViewDomains';
import AddToken from './admin/tokens/AddToken';
import AddUser from './admin/users/AddUser';
import ViewUsers from './admin/users/ViewUsers';
import AdminSettings from './AdminSettings';
import AhwaProposals from './AhwaProposals';
import Community from './community/JoinCommunity';
import DashboardToolbar from './DashboardToolbar';
import LinkDiscord from './Integrations/discord/LinkDiscord';
import Profile from './Profile';
import SwagStore from './SwagStore';
import ViewTokens from './Tokens';
import AddWallet from './Wallets/AddWallet';
import ActiveLectures from './WinstonAcademy/ActiveLectures';
import ActiveLessons from './WinstonAcademy/ActiveLessons';
import CompletedCourses from './WinstonAcademy/CompletedCourses';

const NewsArticles = () => {
  return <div>News Articles</div>;
};
const BannedUsers = () => {
  return <div>Banned Users</div>;
};
const SwapTokens = () => {
  return <div>Swap Tokens</div>;
};
const Faucet = () => {
  return <div>Faucet</div>;
};

const GiftCard = () => {
  return <div>Gift Card</div>;
};
const Courses = () => {
  return <div>Courses</div>;
};
const Lectures = () => {
  return <div>Lectures</div>;
};

const Lessons = () => {
  return <div>Lessons</div>;
};

const CompletedLessons = () => {
  return <div>Completed Lessons</div>;
};

const CompletedLectures = () => {
  return <div>Completed Lectures</div>;
};


export const AdminDashboard = () => {
  const { buttons, setButtons, handleCloseToolbar, handleToggleToolbar } =
    useToolbar();

  React.useEffect(() => {
    setButtons({
      ahwaProposals: false,
      newsArticles: false,
      viewUsers: false,
      bannedUsers: false,
      addUser: false,
      viewDomains: false,
      addDomain: false,
      adminSettings: false,
      wallet: false,
      addToken: false,
      swapTokens: false,
      faucet: false,
      community: false,
      linkDiscord: false,
      giftCard: false,
      shop: false,
      viewTokens: false,
      profile: false,
      courses: false,
      activeCourses: false,
      lectures: false,
      activeLectures: false,
      lessons: false,
      activeLessons: false,
      completedCourses: false,
      completedLessons: false,
      completedLectures: false,
    });
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Typography variant="h3">Dashboard</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <DashboardToolbar handleToggleToolbar={handleToggleToolbar} />
          </Grid>
          <Grid item xs={12} sx={{ p: 2 }}>
            {(() => {
              switch (true) {
                case buttons.ahwaProposals:
                  return <AhwaProposals handleClose={handleCloseToolbar} />;
                case buttons.newsArticles:
                  return <NewsArticles handleClose={handleCloseToolbar} />;
                case buttons.viewUsers:
                  return <ViewUsers handleClose={handleCloseToolbar} />;
                case buttons.bannedUsers:
                  return <BannedUsers handleClose={handleCloseToolbar} />;
                case buttons.addUser:
                  return <AddUser handleClose={handleCloseToolbar} />;
                case buttons.viewDomains:
                  return <ViewDomains handleClose={handleCloseToolbar} />;
                case buttons.addDomain:
                  return <AddDomain handleClose={handleCloseToolbar} />;
                case buttons.adminSettings:
                  return <AdminSettings handleClose={handleCloseToolbar} />;
                case buttons.wallet:
                  return <AddWallet handleClose={handleCloseToolbar} />;
                case buttons.addToken:
                  return <AddToken handleClose={handleCloseToolbar} />;
                case buttons.swapTokens:
                  return <SwapTokens handleClose={handleCloseToolbar} />;
                case buttons.faucet:
                  return <Faucet handleClose={handleCloseToolbar} />;
                case buttons.community:
                  return <Community handleClose={handleCloseToolbar} />;
                case buttons.linkDiscord:
                  return <LinkDiscord handleClose={handleCloseToolbar} />;
                case buttons.giftCard:
                  return <GiftCard handleClose={handleCloseToolbar} />;
                case buttons.shop:
                  return <SwagStore handleClose={handleCloseToolbar} />;
                case buttons.viewTokens:
                  return <ViewTokens handleClose={handleCloseToolbar} />;
                case buttons.profile:
                  return <Profile handleClose={handleCloseToolbar} />;
                case buttons.courses:
                  return <Courses handleClose={handleCloseToolbar} />;
                case buttons.activeCourses:
                  return <ActiveCourses handleClose={handleCloseToolbar} />;
                case buttons.lectures:
                  return <Lectures handleClose={handleCloseToolbar} />;
                case buttons.activeLectures:
                  return <ActiveLectures handleClose={handleCloseToolbar} />;
                case buttons.lessons:
                  return <Lessons handleClose={handleCloseToolbar} />;
                case buttons.activeLessons:
                  return <ActiveLessons handleClose={handleCloseToolbar} />;
                case buttons.completedCourses:
                  return <CompletedCourses handleClose={handleCloseToolbar} />;
                case buttons.completedLessons:
                  return <CompletedLessons handleClose={handleCloseToolbar} />;
                case buttons.completedLectures:
                  return <CompletedLectures handleClose={handleCloseToolbar} />;
                default:
                  return null;
              }
            })()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

AdminDashboard.propTypes = {
  children: PropTypes.node,
};

export default AdminDashboard;
