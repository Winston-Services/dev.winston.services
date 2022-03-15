import { createSlice } from '@reduxjs/toolkit';
const primaryColor = {
  100: '#B2E3FF',
  200: '#86AEFC',
  300: '#6E97FF',
  400: '#396FFB',
  500: '#0077ee',
  600: '#0041E8',
  700: '#0048B3',
  800: '#003E9C',
  900: '#032C6A',
};

const secondaryColor = {
  50: '#E0FFD6',
  100: '#BEFFBF',
  200: '#A3FFA4',
  300: '#87F789',
  400: '#57EC5A',
  500: '#31D834',
  600: '#26BA29',
  700: '',
  800: '#1C871E',
  900: '#146715',
};

const altColor = {
  100: '#FBB46D',
  500: '#F17623',
  900: '#DC6226',
};

const errorColor = {
  500: '#F44336',
};
const publicPageColors = {
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#ffffff',
      dark: '#281e5c',
      light: '#47379e',
    },
    secondary: {
      main: 'rgba(0,0,0,0)',
    },
    alt: {
      main: altColor[500],
      dark: altColor[900],
      light: altColor[100],
    },
    errorColor: {
      main: errorColor[500],
    },
    background: {
      default: '#312470',
      paper: '#2e2368',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '50px',
          padding: '16px 32px',
          boxSizing: 'border-box',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            background:
              'linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#FFD215',
          cursor: 'pointer',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { bold: true },
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
  },
};
const createThemeVariable = (mode, landing) => {
  if (landing) {
    return publicPageColors;
  }
  return {
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    palette: {
      type: mode,
      mode,
      primary: {
        main: mode === 'light' ? '#ffffff' : '#2e2368',
        dark: mode === 'light' ? primaryColor[900] : '#281e5c',
        light: mode === 'light' ? secondaryColor[100] : '#47379e',
      },
      secondary: {
        main: secondaryColor[500],
        dark: secondaryColor[900],
        light: secondaryColor[100],
      },
      alt: {
        main: altColor[500],
        dark: altColor[900],
        light: altColor[100],
      },
      errorColor: {
        main: errorColor[500],
      },
      background: {
        default: mode === 'light' ? '#FBFAFF' : '#271D5A',
        paper: mode === 'light' ? '#FFFFFF' : '#2e2368',
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'light' ? '#FFFFFF' : '#2e2368',
            boxShadow: '0px 0 40px rgba(62, 53, 108, 0.1)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  };
};

const initialState = createThemeVariable('dark', true);

export const themeColors = createSlice({
  name: 'themeColors',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state = createThemeVariable(
        state.palette.type === 'light' ? 'dark' : 'light',
        false
      );
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeColors.actions;
export const themeModeSelector = (state) => state.themeColors.palette.type;
export const themeSelector = (state) => state.themeColors;
export default themeColors.reducer;
