import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import useToolbar from '../../hooks/useToolbar';
import ActiveCourses from '../dashboard/academy/ActiveCourses';
import AddDomain from './admin/domains/AddDomain';
import ViewDomains from './admin/domains/ViewDomains';
import AddRole from './admin/roles/AddRole';
import SetDailyKey from './admin/system/SetDailyKey';
import AddToken from './admin/tokens/AddToken';
import AddUser from './admin/users/AddUser';
import ViewUsers from './admin/users/ViewUsers';
import DashboardToolbar from './DashboardToolbar';
import Profile from './Profile';
import SwagStore from './SwagStore';
import ViewTokens from './Tokens';
import AddWallet from './Wallets/AddWallet';


const FakeComponent = () => {
  return <div>Fake Component</div>;
};

const AdminSettings = () => {
  return (
    <Box>
      <Typography variant="h6">Admin Settings</Typography>
      <SetDailyKey />
      <AddRole />
    </Box>
  );
};

const NewsArticles = FakeComponent;

const BannedUsers = FakeComponent;

const SwapTokens = FakeComponent;

const Faucet = FakeComponent;

const Community = FakeComponent;

const LinkDiscord = FakeComponent;

const GiftCard = FakeComponent;


const Courses = FakeComponent;
const Lectures = FakeComponent;
const ActiveLectures = FakeComponent;
const Lessons = FakeComponent;
const ActiveLessons = FakeComponent;
const CompletedCourses = FakeComponent;
const CompletedLessons = FakeComponent;
const CompletedLectures = FakeComponent;
const AhwaProposals = FakeComponent;



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
