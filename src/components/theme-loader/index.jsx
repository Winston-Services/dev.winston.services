/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview src/components/common/theme-loader.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from 'react';

import { CssBaseline } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { themeSelector } from '../../store/themeColors';

export default function ThemeLoader(props) {
  const themeColor = useSelector(themeSelector);
  const theme = responsiveFontSizes(createTheme(themeColor));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

ThemeLoader.propTypes = {
  children: PropTypes.element,
};
