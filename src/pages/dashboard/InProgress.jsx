import React from 'react';

import PropTypes from 'prop-types';

import JoinCommunity from './community/JoinCommunity';
import CrowdFund from './CrowdFunding';
import LinkDiscord from './Integrations/discord/LinkDiscord';
import LiquidityStaking from './LiquidityStaking';
import NFTMarketplace from './NFTMarketplace';
import CreateProfile from './Profile/CreateProfile';
import SwagStore from './SwagStore';
import SwapAssets from './Swap';
import CreateWallet from './Wallets/CreateWallet';
import LinkWallet from './Wallets/LinkWallet';
import WinstonAcademy from './WinstonAcademy';
import ActiveCourses from './WinstonAcademy/ActiveCourses';
import SponsorCourse from './WinstonAcademy/SponsorCourse';
import SponsorStudent from './WinstonAcademy/SponsorStudent';
import WinstonEducator from './WinstonAcademy/WinstonEducator';

export const InProgress = ({ inProgress, setInProgress, handleCompleteItem }) => {
  const { item } = inProgress;

  switch (item.title) {
    case 'Create Your Profile':
      return (
        <CreateProfile
          setInProgress={setInProgress}
          inProgress={inProgress}
          handleCompleteItem={handleCompleteItem}
        />
      );

    case 'Create A Wallet':
      return (
        <CreateWallet
          setInProgress={setInProgress}
          inProgress={inProgress}
          handleCompleteItem={handleCompleteItem}
        />
      );
    case 'Link A Wallet':
      return (
        <LinkWallet setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Join Our Community':
      return (
        <JoinCommunity
          setInProgress={setInProgress}
          inProgress={inProgress}
          handleCompleteItem={handleCompleteItem}
        />
      );
    case 'Earn Roles':
      return (
        <LinkDiscord
          setInProgress={setInProgress}
          inProgress={inProgress}
          handleCompleteItem={handleCompleteItem}
        />
      );
    case 'Learn to Earn':
      return (
        <WinstonAcademy setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Start Teaching':
      return (
        <WinstonEducator
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Sponsor a Course':
      return (
        <SponsorCourse setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Sponsor a Student':
      return (
        <SponsorStudent setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Active Courses':
      return (
        <ActiveCourses setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Swap Assets':
      return (
        <SwapAssets setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Liquidity Staking':
      return (
        <LiquidityStaking
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'NFT Marketplace':
      return (
        <NFTMarketplace setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Crowd Fund':
      return (
        <CrowdFund setInProgress={setInProgress} inProgress={inProgress} />
      );
    case 'Swag Store':
      return (
        <SwagStore setInProgress={setInProgress} inProgress={inProgress} />
      );
    default:
      return null;
  }
};

InProgress.propTypes = {
  inProgress: PropTypes.object.isRequired,
  setInProgress: PropTypes.func.isRequired,
  handleCompleteItem: PropTypes.func.isRequired,
};

export default InProgress;
