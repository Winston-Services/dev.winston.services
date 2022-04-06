import React from 'react';

import { PropTypes } from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import CheckoutWrapper from '../../components/CheckoutWrapper';
import smartContract from './../../../../assets/smart_contract.svg';
function Checkout({ setWizardData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isCustomWizard = location.pathname.indexOf('/wizard/custom') > -1;
  const checkoutData = [
    {
      title: 'Smart contract',
      icon: smartContract,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit, at vehicula libero gravida. Proin faucibus, nisl vel condimentum fringilla, arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed blandit tincidunt velit ac vulputate. Mauris consequat efficitur lobortis. Sed nec congue est',

      items: [
        {
          title: 'Download it’s free',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Download it’s free',
          successText: 'Successfully Download Smart Contract!',
          onBtnClick: () => {
            setWizardData({
              smartContractSuccessText: 'Successfully downloaded!',
            });
            navigate(
              isCustomWizard
                ? '/wizard/custom/checkout-success'
                : '/wizard/smart-contract/checkout-success'
            );
          },
        },
        {
          title: 'Launch to Network',
          price: '$XX/one time',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Purchase',
          successText: 'Successfully purchased Smart Contract!',
          onBtnClick: () => {
            setWizardData({
              smartContractSuccessText: 'Successfully launched to network!',
            });
            navigate(
              isCustomWizard
                ? '/wizard/custom/checkout-success'
                : '/wizard/smart-contract/checkout-success'
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
  wizardSmartContractData: PropTypes.object,
  setWizardSmartContractData: PropTypes.func,
};
