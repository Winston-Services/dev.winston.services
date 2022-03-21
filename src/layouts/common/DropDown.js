import React from 'react';
import { makeStyles } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PropTypes } from 'prop-types';
const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#483996',
      color: 'white',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'white',
    },
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'white',
    },
  },
  select: {
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  },
});

function DropDown({ label, options, placeholder = '' }) {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={`${classes.root}`}>
      <InputLabel style={{ color: 'white' }}>{label}</InputLabel>
      <Select
        label={label}
        style={{ borderColor: 'white' }}
        className={classes.select}
        inputProps={{ MenuProps: { disableScrollLock: true } }}
      >
        {placeholder !== '' && (
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}
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

DropDown.propTypes = {
  label: PropTypes.element,
  options: PropTypes.element,
  placeholder: PropTypes.element,
};

export default DropDown;
