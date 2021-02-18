import { createMuiTheme } from '@material-ui/core'
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#000',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000',
      contrastText: '#fff',
    },
  },
})
export default theme
