import { type SimplePaletteColorOptions, createTheme } from '@mui/material/styles';

import { AppPaletteOptions } from '@/types/mui';

const defaultPaletteColorOptions: SimplePaletteColorOptions = {
  light: undefined,
  main: '',
  dark: undefined,
  contrastText: '#FFFFFF',
};

let appPaletteOptions: AppPaletteOptions = {
  pureWhite: { main: '#FFF' },
};

appPaletteOptions = Object.keys(appPaletteOptions).reduce((acc: any, key: any) => {
  acc[key] = {
    ...defaultPaletteColorOptions,
    ...appPaletteOptions[key as keyof typeof appPaletteOptions],
  };
  return acc;
}, {});

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    ...appPaletteOptions,
    text: {
      primary: '#474C4D',
      disabled: '#BBBBBB',
    },
    primary: {
      main: '#4338ca',
      contrastText: '#FFFFFF',
    },
  },
});
