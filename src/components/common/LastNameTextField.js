import React from 'react';

import TextField from './TextField';

const LastNameTextField = (props) => {
  return (
    <TextField label="Last Name" name="lastName" size="small" {...props} />
  );
};

export default LastNameTextField;
