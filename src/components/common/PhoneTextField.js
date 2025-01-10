import React from 'react';

import PropTypes from 'prop-types';

import TextField from './TextField';

const PhoneTextField = (props) => {
  return (
    <TextField
      label="Phone"
      name="phone"
      size="small"
      type="tel"
      placeholder="+1 (555) 123-4567"
      inputMode="numeric"
      pattern="[+]?[0-9]{1,4}?[-.\\s]?[(]?[0-9]{1,3}[)]?[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,9}"
      {...props}
    />
  );
};

PhoneTextField.propTypes = {
  onChange: PropTypes.func,
};

export default PhoneTextField;
