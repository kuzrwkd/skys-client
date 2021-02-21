import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { COLOR } from '@/interfaces/ui/styles/colors'

const drawerWidth = 310
const { darkgray } = COLOR

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: 20,
      backgroundColor: darkgray,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      marginRight: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      boxShadow: 'none',
    },
    appBarButton: {
      textTransform: 'none',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)
