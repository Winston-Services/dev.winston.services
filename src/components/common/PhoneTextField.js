import React from 'react';

import TextField from './TextField';

const PhoneTextField = (props) => {
  return <TextField label="Phone" name="phone" size="small" type="tel" {...props} />;
};

export default PhoneTextField;
