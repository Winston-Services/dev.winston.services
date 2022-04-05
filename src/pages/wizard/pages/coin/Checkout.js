import React from 'react';

import { PropTypes } from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import CheckoutWrapper from '../../components/CheckoutWrapper';
import coin from './../../../../assets/coin.svg';

function Checkout({ setWizardData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isCustomWizard = location.pathname.indexOf('/wizard/custom') > -1;
  const checkoutData = [
    {
      title: 'Coin name',
      icon: coin,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit, at vehicula libero gravida. Proin faucibus, nisl vel condimentum fringilla, arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed blandit tincidunt velit ac vulputate. Mauris consequat efficitur lobortis. Sed nec congue est',
      items: [
        {
          title: 'Monthly Hosting',
          price: '$XX/month',
          duration: 'First 1 month free',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Subscribe',
          onBtnClick: () => {
            setWizardData({
              coinSuccessText: 'Successfully subscribe Monthly Hosting!',
            });
            navigate(
              isCustomWizard
                ? '/wizard/custom/coin-checkout-success'
                : '/wizard/coin/checkout-success'
            );
          },
        },
        {
          title: 'Purchase Coin',
          price: '$XX/one time',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Purchase Coin',
          onBtnClick: () => {
            setWizardData({
              coinSuccessText: 'Successfully purchased coin!',
            });
            navigate(
              isCustomWizard
                ? '/wizard/custom/coin-checkout-success'
                : '/wizard/coin/checkout-success'
            );
          },
        },
      ],
    },
  ];

  return <CheckoutWrapper checkoutData={checkoutData} />;
}
export default Checkout;
Checkout.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
