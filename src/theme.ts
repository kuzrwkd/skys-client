import {type SimplePaletteColorOptions, createTheme} from '@mui/material/styles';
import {AppPaletteOptions} from '@/types/mui';

type AppPaletteOptionsKey = keyof typeof appPaletteOptions;

const defaultPaletteColorOptions: SimplePaletteColorOptions = {
  light: undefined,
  main: '',
  dark: undefined,
  contrastText: '#FFFFFF',
};

let appPaletteOptions: AppPaletteOptions = {
  pureWhite: {main: '#FFF'},
};

appPaletteOptions = Object.keys(appPaletteOptions).reduce((acc: AppPaletteOptions, key: string) => {
  acc[key as AppPaletteOptionsKey] = {
    ...defaultPaletteColorOptions,
    ...appPaletteOptions[key as AppPaletteOptionsKey],
  };
  return acc;
}, {} as AppPaletteOptions);

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
