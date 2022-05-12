import React from 'react';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { PropTypes } from 'prop-types';

function DropDown2({ options, placeholder = '' }) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <FormControl>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          background:
            'linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)',
          borderRadius: '5px',
          height: '47px',
          width: '154px',
          border: 'none',
        }}
      >
        <MenuItem value="">{placeholder}</MenuItem>
        {options?.map((value) => {
          return (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

DropDown2.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default DropDown2;
