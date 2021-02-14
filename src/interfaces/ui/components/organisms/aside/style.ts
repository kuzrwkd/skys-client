import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() =>
  createStyles({
    drawerMenu: {
      display: 'flex',
      flexFlow: 'row-reverse',
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
  })
)
