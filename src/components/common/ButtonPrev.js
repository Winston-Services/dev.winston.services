import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Button } from '@mui/material';
function ButtonPrev({ onClick = '' }) {
  let navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        navigate(onClick);
      }}
    >
      Previous
    </Button>
  );
}

ButtonPrev.propTypes = {
  onClick: PropTypes.element,
};

export default ButtonPrev;
