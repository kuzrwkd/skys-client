import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      flex: 1,
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      padding: 8,

      '&:not(last-child)': {
        borderBottom: '1px solid #eee',
      },
    },
    listItemInnerWrapper: {
      width: '100%',
    },
    listItemFigure: {
      margin: 0,
    },
    listItemThumbnailWrapper: {
      height: 132,
      marginBottom: 8,
      position: 'relative',
      overflow: 'hidden',
    },
    listItemAuthor: {
      marginBottom: 8,
      overflow: 'hidden',
    },
    listItemThumbnail: {
      display: 'block',
      width: '100%',
      position: 'absolute',
      top: -22,
    },
    listItemTitle: {
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 2,
      overflow: 'hidden',
      marginBottom: 8,
      height: 40,
    },
    listItemTitleYoutube: {
      height: 34,
    },
    listItemMetaBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listItemMetaBoxColumnLayout: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '-webkit-line-clamp': 1,
      overflow: 'hidden',
    },
    listItemTime: {
      marginRight: 8,
    },
    listItemText: {
      fontSize: '.8rem',
      whiteSpace: 'break-spaces',
      color: theme.palette.primary.contrastText,
    },
  })
)
