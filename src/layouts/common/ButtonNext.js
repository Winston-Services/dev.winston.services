import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';
function ButtonNext({ onClick = '' }) {
  let navigate = useNavigate();
  return (
    <Button
      variant="contained"
      color="secondary"
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
