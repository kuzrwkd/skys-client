import React, { FC } from 'react'
import DefaultLayout from '@/interfaces/ui/components/templates/default'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'
import NoSsr from '@material-ui/core/NoSsr'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import dayjs from 'dayjs'
import { useWindowDimensions } from '@/utils/windowDimensions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      flex: 1,
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
    item: {
      cursor: 'auto',
    },
  })
)

const Page: FC = () => {
  const { height } = useWindowDimensions()
  const classes = useStyles()

  const { nikkeiNews, nikkeiMarkets } = useSelector((state) => state)

  const nikkei = [...nikkeiNews.data, ...nikkeiMarkets.data].sort((a, b) =>
    dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1
  )

  const ITEM_SIZE = 50

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props

    return (
      <ListItem button className={classes.item} style={style} key={index}>
        <Link
          href={`${nikkei[index].link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary={`${nikkei[index].title}`} />
        </Link>
      </ListItem>
    )
  }

  return (
    <DefaultLayout>
      <React.Fragment>
        <div className={classes.root}>
          <NoSsr>
            <div style={{ height }}>
              <AutoSizer>
                {({ height, width }) => (
                  <List
                    height={height}
                    width={width}
                    itemSize={ITEM_SIZE}
                    itemCount={nikkei.length}
                  >
                    {renderRow}
                  </List>
                )}
              </AutoSizer>
            </div>
          </NoSsr>
        </div>
      </React.Fragment>
    </DefaultLayout>
  )
}

export default Page
