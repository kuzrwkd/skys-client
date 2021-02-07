import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Chip from '@material-ui/core/Chip'
import NoSsr from '@material-ui/core/NoSsr'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import { useWindowDimensions } from '@/applications/usecases/stateful/windowDimensions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropsType from 'prop-types'
import { Props } from './types'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ja')
dayjs.extend(relativeTime)

const ARTICLE_TITLE_TOTAL_PADDING = 16
const ARTICLE_TITLE_BORDER = 1
const ITEM_SIZE = 112

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      flex: 1,
      backgroundColor: theme.palette.background.paper,
    },
    articleTitle: {
      margin: 0,
      lineHeight: 0,
      padding: '8px 0',
      borderBottom: '1px solid #eee',
    },
    listItem: {
      '&:not(last-child)': {
        borderBottom: '1px solid #eee',
      },
    },
    listItemTitle: {
      marginBottom: 8,
    },
    listItemMetaBox: {
      display: 'flex',
      alignItems: 'center',
    },
    listItemTime: {
      marginRight: 8,
    },
  })
)

const component: FC<Props> = ({ children, data, logoHeight }) => {
  let { height } = useWindowDimensions()
  height =
    height - (logoHeight + ARTICLE_TITLE_TOTAL_PADDING + ARTICLE_TITLE_BORDER)

  const classes = useStyles()

  const row = (props: ListChildComponentProps) => {
    const { index, style } = props
    const item = data[index]
    const title = item.title
    const url = item.link
    const relativeTime = dayjs().to(dayjs(String(item.date)))
    const category = item.categories[0]

    return (
      <ListItem className={classes.listItem} style={style} key={index}>
        <div>
          <div className={classes.listItemTitle}>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={title} />
            </Link>
          </div>
          <div className={classes.listItemMetaBox}>
            {category !== '' && (
              <Chip
                variant="outlined"
                size="small"
                label={category}
                className={classes.listItemTime}
              />
            )}
            <div>{relativeTime}</div>
          </div>
        </div>
      </ListItem>
    )
  }

  return (
    <React.Fragment>
      <article className={classes.root}>
        <header>
          <h2 className={classes.articleTitle}>{children}</h2>
        </header>
        <NoSsr>
          <div style={{ height }}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  itemSize={ITEM_SIZE}
                  itemCount={data.length}
                >
                  {row}
                </List>
              )}
            </AutoSizer>
          </div>
        </NoSsr>
      </article>
    </React.Fragment>
  )
}

component.propTypes = {
  data: PropsType.array.isRequired,
  logoHeight: PropsType.number.isRequired,
}

export default component
