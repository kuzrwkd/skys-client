export const colors = ['pureWhite'] as const;

type Keys = (typeof colors)[number];

export type AppPaletteOptions = {[K in Keys]: SimplePaletteColorOptions};
export type AppPalette = {[K in Keys]: PaletteColor};

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions extends AppPaletteOptions {}
  interface Palette extends AppPalette {}
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}
