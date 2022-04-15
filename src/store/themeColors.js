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
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
      variants: [
        {
          props: { gradient: true },
          style: {
            backgroundColor: 'transparent',
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
        {
          props: { opacity: '50' },
          style: {
            background: 'rgba(39, 29, 90, 0.5)',
          },
        },
      ],
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#31256C',
        },
      },
      variants: [
        {
          props: { expanded: true },
          style: {
            backgroundColor: '#382B78',
          },
        },
        {
          props: { variant: 'transparent' },
          style: {
            backgroundColor: 'transparent',
            padding: '0px',
          },
        },
      ],
    },
    MuiAccordionSummary: {
      variants: [
        {
          props: { variant: 'transparent' },
          style: {
            padding: '0px',
          },
        },
      ],
    },
    MuiAccordionDetails: {
      variants: [
        {
          props: { variant: 'transparent' },
          style: {
            padding: '0px',
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
          boxShadow: 'none',
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
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: '#31256C',
            color: 'white',
            '&:hover': {
              background:
                'linear-gradient(266.09deg, #E452C8 6.16%, #EA7A8F 94.97%)',
            },
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
            textDecoration: 'none',
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
            padding: '6px',
            // borderRadius: '17px',
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            background:
              'linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important',
            padding: '6px',
          },
        },
        {
          props: { variant: 'filled', color: 'success' },
          style: {
            background: '#58A751',
            color: 'white',
            padding: '6px',
          },
        },
        {
          props: { variant: 'filled', color: 'error' },
          style: {
            background: '#A75151',
            color: 'white',
            padding: '6px',
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
      tabIndicatorStyle: {
        style: {
          background: 'linear-gradient(90deg, #EA7A8F 0%, #E452C8 99.4%)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: '#5A5189',
          background: 'transparent',
          padding: '16px 30px',
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
    MuiDivider: {
      variants: [
        {
          props: { orientation: 'vertical' },
          style: {
            borderImageSlice: 1,
            borderImageSource:
              'linear-gradient(90deg, #EA7A8F 0.64%, #E452C8 99.36%)',
          },
        },
      ],
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
        },
        footerContainer: {
          display: 'none',
        },
        columnSeparator: {
          display: 'none',
        },
        cell: {
          borderColor: '#564E7F',
        },
        columnHeaders: {
          borderColor: '#564E7F',
        },
      },
    },
    MuiGrid: {
      variants: [
        {
          props: { variant: 'bottomBorder' },
          style: {
            borderBottom: '1px solid #5A5189',
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: '#f5f5f9',
        },
        tooltip: {
          background: '#f5f5f9',
          maxWidth: 220,
          color: 'black',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: 'none',
        },
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
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 'none',
          },
          footerContainer: {
            display: 'none',
          },
          columnSeparator: {
            display: 'none',
          },
          cell: {
            borderColor: mode === 'light' ? '#EEECFA' : '#564E7F',
          },
          columnHeaders: {
            borderColor: mode === 'light' ? '#EEECFA' : '#564E7F',
          },
        },
      },
    },
  };
};

const createChartVariable = (mode) => {
  return {
    primary: {
      main: mode === 'light' ? 'black' : 'white',
    },
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
    inOutAreaChartColor: {
      stroke: '#B0B9FF',
      area:
        mode === 'light'
          ? ['rgba(0,26,255,0.4)', 'rgba(255,98,31,0.3)']
          : ['rgba(126,123,255,0.7)', 'rgba(255,255,255,0.7)'],
    },
    serverBarChartColor: [{ fill: '#FFB08D' }, { fill: '#BF8DFF' }],
    botBarChartColor: [{ fill: '#00B4D8' }, { fill: '#318596' }],
  };
};

const layout = window.location.pathname.includes('dashboard')
  ? 'dashboard'
  : 'landing';

const initialState = {
  colors: createThemeVariable('dark', layout === 'dashboard'),
  oldLayout: layout,
  oldMode: 'light',
  chartColors: createChartVariable('dark'),
};

export const themeColorsSlice = createSlice({
  name: 'themeColors',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const newMode = state.oldMode === 'light' ? 'dark' : 'light';
      state.oldMode = newMode;
      state.oldLayout = action.payload;
      state.colors = createThemeVariable(newMode, true);
      state.chartColors = createChartVariable(newMode);
      return state;
    },
    setTheme: (state, action) => {
      state.colors = createThemeVariable(
        state.oldMode,
        action.payload === 'dashboard'
      );
      state.chartColors = createChartVariable(state.oldMode);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themeColorsSlice.actions;
export const themeModeSelector = (state) =>
  state.themeColors.colors.palette.type;
export const themeSelector = (state) => state.themeColors.colors;
const themeColors = themeColorsSlice.reducer;
export default themeColors;
