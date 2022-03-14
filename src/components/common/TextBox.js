import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
const useStyles = makeStyles({
  root: {
    width: '100%',
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
  error: {
    width: '100%',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
      color: 'red',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
    '& .MuiOutlinedInput-input': {
      color: 'red',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'red',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'white',
    },
    '& .MuiInputLabel-outlined': {
      color: 'red',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'red',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'red',
    },
  },
});

function TextBox(props) {
  const { label, placeholder = '', errorMsg = '', noOfRow = '' } = props;
  const classes = useStyles();
  return (
    <TextField
      error={errorMsg ? true : false}
      id="outlined-error-helper-text"
      className={`w100 ${errorMsg ? classes.error : classes.root}`}
      variant="outlined"
      label={label}
      multiline={noOfRow !== '' ? true : false}
      rows={noOfRow}
      placeholder={placeholder}
      helperText={errorMsg}
    />
  );
}

TextBox.propTypes = {
  label: PropTypes.node,
  placeholder: PropTypes.node,
  errorMsg: PropTypes.node,
  noOfRow: PropTypes.node,
};
export default TextBox;
