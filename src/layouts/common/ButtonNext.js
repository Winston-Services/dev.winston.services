import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, Button } from '@mui/material';
import { PropTypes } from 'prop-types';
function ButtonNext({ onClick = '' }) {
  let navigate = useNavigate();
  const matches = useMediaQuery('(min-width:535px)');
  return (
    <Button
      className={`wizard_button    gradientButton colorWhite ${
        matches ? 'wMax ' : 'w50'
      }`}
      onClick={() => {
        if (onClick !== '') navigate(onClick);
      }}
    >
      Next
    </Button>
  );
}

ButtonNext.propTypes = {
  onClick: PropTypes.element,
};
export default ButtonNext;
