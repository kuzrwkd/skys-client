import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerMenu: {
      display: 'flex',
      flexFlow: 'row-reverse',
    },
    drawerMenuHide: {
      display: 'none',
    },
    drawerNav: {
      width: 57,
      minHeight: 'calc(100vh - 65px)',
      borderLeft: 'solid 1px #eee',
    },
    drawerContents: {
      flex: 1,
    },
    listItemIcon: {
      minWidth: 'auto',
    },
    icon: {
      color: theme.palette.primary.contrastText,
    },
  })
)
