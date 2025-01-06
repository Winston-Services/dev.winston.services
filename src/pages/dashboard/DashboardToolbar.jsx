import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useUser from '../../hooks/useUser';

export const DashboardToolbar = ({ handleToggleToolbar }) => {
  const navigate = useNavigate();
  const user = useUser();
  const isAdmin = user?.info?.isAdmin || false;
  return (
    <Toolbar sx={{ '& > *': { mr: 2 }, display: 'flex', flexWrap: 'wrap' }}>
      <ButtonGroup size="small">
        <Tooltip title="Ahwa Proposals">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('ahwaProposals')}
          >
            <Icon>ballot</Icon>
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup size="small">
        <Tooltip title="Community" color="info">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('community')}
          >
            <img
              src="./assets/icons/toolbar/CommunityIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>

        <Tooltip title="Link Discord" color="info">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('linkDiscord')}
          >
            <img
              src="./assets/icons/toolbar/DiscordIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>

        <Tooltip title="View/Edit Profile" color="info">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('profile')}
          >
            <Icon>assignment_ind</Icon>
          </Button>
        </Tooltip>

        <Tooltip title="Winston Chat" color="info">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/dashboard/messages')}
          >
            <Icon>chat</Icon>
          </Button>
        </Tooltip>

        <Tooltip title="Swag Shop" color="info">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('swagShop')}
          >
            <Icon>shopping_cart</Icon>
          </Button>
        </Tooltip>
        <Tooltip title="Your Wallets">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('wallet')}
          >
            <Icon>wallet</Icon>
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup size="small">
        <Tooltip title="View Tokens">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('viewTokens')}
          >
            <img
              src="./assets/icons/toolbar/WinstonProfileIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>

        <Tooltip title="Swap Tokens">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('swapTokens')}
          >
            <img
              src="./assets/icons/toolbar/SwapIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
        <Tooltip title="Faucet">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('faucet')}
          >
            <img
              src="./assets/icons/toolbar/FaucetIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
        <Tooltip title="Gift Card">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('giftCard')}
          >
            <img
              src="./assets/icons/toolbar/GiftIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
      </ButtonGroup>

      <ButtonGroup size="small">
        <Tooltip title="Winston Academy">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('activeCourses')}
          >
            <img
              src="./assets/icons/toolbar/WinstonAcademyIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
        <Tooltip title="Active Lectures">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('activeLectures')}
          >
            <img
              src="./assets/icons/toolbar/LecturesIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
        <Tooltip title="Active Lessons">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('activeLessons')}
          >
            <img
              src="./assets/icons/toolbar/LessonsIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
        <Tooltip title="Completed Courses">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('completedCourses')}
          >
            <img
              src="./assets/icons/toolbar/CompletedCourseIcon.png"
              alt="coin"
              style={{ width: 24, height: 24 }}
            />{' '}
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup size="small">
        <Tooltip title="View the News">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/news')}
          >
            <Icon>newspaper</Icon>
          </Button>
        </Tooltip>
        <Tooltip title="Report the News">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/news/report-the-news')}
          >
            <Icon>article</Icon>
          </Button>
        </Tooltip>
        <Tooltip title="Your News Articles">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleToolbar('newsArticles')}
          >
            <Icon>description</Icon>
          </Button>
        </Tooltip>
      </ButtonGroup>

      {isAdmin && (
        <ButtonGroup size="small" sx={{ border: '1px solid red' }}>
          <Tooltip title="View Users">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleToolbar('viewUsers')}
            >
              <Icon>people_outline</Icon>
            </Button>
          </Tooltip>
          <Tooltip title="Add User">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleToolbar('addUser')}
            >
              <Icon>person_add</Icon>
            </Button>
          </Tooltip>
          <Tooltip title="List Token">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleToolbar('addToken')}
            >
              <img
                src="./assets/icons/toolbar/CoinIcon.png"
                alt="coin"
                style={{ width: 24, height: 24 }}
              />{' '}
            </Button>
          </Tooltip>
          <Tooltip title="View Domains">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleToolbar('viewDomains')}
            >
              <Icon>domain</Icon>
            </Button>
          </Tooltip>
          <Tooltip title="Add Domain">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleToolbar('addDomain')}
            >
              <Icon>domain_add</Icon>
            </Button>
          </Tooltip>
          <Tooltip title="Admin Settings">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleToolbar('adminSettings')}
            >
              <Icon>admin_panel_settings</Icon>
            </Button>
          </Tooltip>
        </ButtonGroup>
      )}
    </Toolbar>
  );
};

DashboardToolbar.propTypes = {
  handleToggleToolbar: PropTypes.func.isRequired,
};

export default DashboardToolbar;
