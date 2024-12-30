import React from 'react';

import TextField from './TextField';

const TitleTextField = (props) => {
  return (
    <TextField label="Title" name="title" size="small" {...props} />
  );
};

export default TitleTextField;
