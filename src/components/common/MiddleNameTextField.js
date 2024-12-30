import React from 'react';

import TextField from './TextField';

const MiddleNameTextField = (props) => {
  return (
    <TextField label="Middle Name" name="middleName" size="small" {...props} />
  );
};

export default MiddleNameTextField;
