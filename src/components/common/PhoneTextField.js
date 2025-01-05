import React from 'react';

import TextField from './TextField';

const PhoneTextField = (props) => {
  return (
    <TextField
      label="Phone"
      name="phone"
      size="small"
      type="tel"
      inputProps={{
        pattern:
          '[+]?[0-9]{1,4}?[-.\\s]?[(]?[0-9]{1,3}[)]?[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,9}',
      }}
      {...props}
    />
  );
};

export default PhoneTextField;
