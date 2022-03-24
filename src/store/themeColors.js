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
  // shape: { borderRadius: '20px' },
  palette: {
    type: 'dark',
    mode: 'dark',
    winston: {
      main: 'linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)',
      reverseMain: 'linear-gradient(92.44deg, #E452C8 3.93%, #EA7A8F 98.71%)',
      dark: '#EA7A8F',
      light: '#E452C8',
      yellow: '#FFD215',
    },
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
      default: '#271D5A',
      paper: '#31256C',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#00a3ff',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          background:
            'linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important',
          color: 'white',
          // fontSize: 14,
          // fontWeight: 800,
          // width: 30,
          // height: 30,
          // borderRadius: 25,
          // left: '-5px',
        },
        colorSecondary: {
          background: 'white',
          color: 'black',
          // fontSize: 12,
          // width: 18,
          // height: 18,
          // borderRadius: 25,
          // left: '-12px',
        },
      },
    },
    MuiDrawer: {
      variants: [],
    },
    MuiPaper: {
      variants: [
        {
          props: { gradient: true },
          style: {
            backgroundColor: 'transparent',
            height: '100vh!important',
            backgroundImage:
              'linear-gradient(162deg, #f75385 20%, #ea7c8f, #9e65e8 100%)',
          },
        },
        {
          props: { gradient: false },
          style: {
            backgroundImage: 'none',
          },
        },
      ],
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: `#31256C`,
        },
      },
      variants: [
        {
          props: { expanded: true },
          style: {
            backgroundColor: '#382B78',
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontWeight: '700',
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            fontWeight: '700',
          },
        },
        {
          props: { variant: 'h3' },
          style: {
            fontWeight: '700',
          },
        },
        {
          props: { color: 'inActive' },
          style: {
            color: '#DEDEDE',
          },
        },
        {
          props: { color: 'link' },
          style: {
            color: '#3994E6',
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '0.8em 2em',
          boxSizing: 'border-box',
          borderRadius: '28px',
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
      variants: [
        {
          props: { color: 'primary' },
          style: {
            cursor: 'pointer',
            '&:hover': {
              color: '#FFD215',
            },
          },
        },
        {
          props: { color: 'nav' },
          style: {
            color: '#ffffff',
            cursor: 'pointer',
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: '#fff',
            padding: '1em 2em',
            height: '50px',
            borderRadius: '28px',
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            background: '#4F409A',
            padding: '10px 8px',
            // borderRadius: '17px',
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            background:
              'linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important',
            color: 'white',
            fontSize: '14px',
            padding: '10px 15px',
            height: '36px',
            // borderRadius: '5px',
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            fieldset: { borderRadius: '4px' },
          },
        },
        {
          props: { color: 'filled' },
          style: {
            backgroundImage: 'none',
            backgroundColor: '#31256C',
            padding: '8px 25px',
            borderRadius: '50px',
            height: '45px',
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: '20px' },
      },
    },
  },
};
const createThemeVariable = (mode, dashboard) => {
  if (!dashboard) {
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
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
          },
        },
      },
    },
  };
};
const layout = window.location.pathname.includes('dashboard')
  ? 'dashboard'
  : 'landing';
const initialState = {
  colors: createThemeVariable('dark', layout === 'dashboard'),
  oldLayout: layout,
  oldMode: 'light',
  chartColors: {
    tinyAreaChartColors: [
      '#E9C46A',
      '#FFF3B0',
      '#F4A261',
      '#E76F51',
      '#FFBE0B',
      '#F08080',
      '#90EAE8',
      '#D86732',
    ],
    bigAreaChartColor: '#2196F3',
    barChartColor: [{ fill: '#00B4D8' }, { fill: '#318596' }],
  },
};

export const themeColors = createSlice({
  name: 'themeColors',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const newMode = state.oldMode === 'light' ? 'dark' : 'light';
      state.oldMode = newMode;
      state.oldLayout = action.payload;
      state.colors = createThemeVariable(newMode, true);
      return state;
    },
    setTheme: (state, action) => {
      state.colors = createThemeVariable(
        state.oldMode,
        action.payload === 'dashboard'
      );
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themeColors.actions;
export const themeModeSelector = (state) =>
  state.themeColors.colors.palette.type;
export const themeSelector = (state) => state.themeColors.colors;
export default themeColors.reducer;
