import React from 'react';

import TextField from './TextField';

const FirstNameTextField = (props) => {
  return (
    <TextField label="First Name" name="firstName" size="small" {...props} />
  );
};

export default FirstNameTextField;
