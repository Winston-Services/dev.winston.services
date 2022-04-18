import React, { useEffect } from 'react';

import { Switch } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PropTypes } from 'prop-types';

export default function CustomSwitch({ name, option1, option2, onChange }) {
  const [state, setState] = React.useState(false);

  const handleChange = () => {
    if (onChange) {
      onChange(!state);
    }
    setState(!state);
  };

  useEffect(() => {
    onChange(state);
  }, [onChange, state]);

  const useStyles = makeStyles({
    root: {
      width: '380px',
      height: '57px',
      padding: '0px',
      backgroundColor: '#271D5A',
      borderRadius: '40px',
    },
    switchBase: {
      padding: '1px',
      borderRadius: '40px',
      transition:
        'left 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&$checked': {
        '& + $track': {
          backgroundColor: 'transparent',
        },
      },
    },
    thumb: {
      color: '#31256C',
      width: '180px',
      height: '49px',
      margin: '3px',
      borderRadius: '40px',
    },
    track: {
      borderRadius: '40px',
      backgroundColor: 'transparent',
      opacity: '1 !important',
      zIndex: 1,
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      '&:after, &:before': {
        fontSize: '14px',
      },
      '&:after': {
        content: `"${option1}"`,
      },
      '&:before': {
        content: `"${option2}"`,
      },
    },
    checked: {
      color: 'transparent !important',
      borderRadius: '40px',
      transform: 'translateX(192px) !important',
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Switch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        checked={state}
        onChange={handleChange}
        name={name}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

CustomSwitch.propTypes = {
  name: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  onChange: PropTypes.func,
};
