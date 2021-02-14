import React, { FC } from 'react'
import Link from '@material-ui/core/Link'
import NoSsr from '@material-ui/core/NoSsr'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import { useWindowDimensions } from '@/applications/usecases/stateful/windowDimensions'
import ListItem from '@material-ui/core/ListItem'
import PropsType from 'prop-types'
import { Props } from './types'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useStyles } from './style'

dayjs.locale('ja')
dayjs.extend(relativeTime)
const ITEM_SIZE = 85

const component: FC<Props> = ({ data }) => {
  let { height } = useWindowDimensions()
  height = height - 65

  const classes = useStyles()

  const row = (props: ListChildComponentProps) => {
    const { index, style } = props
    const item = data[index]
    const title = item.title
    const url = item.link
    const relativeTime = dayjs().to(dayjs(String(item.date)))
    const organization = item.organization

    return (
      <ListItem className={classes.listItem} style={style} key={index}>
        <div className={classes.listItemInnerWrapper}>
          <div className={classes.listItemTitle}>
            <Link
              href={url}
              className={classes.listItemText}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </div>
          <div className={classes.listItemMetaBox}>
            <div>{relativeTime}</div>
            <div>{organization}</div>
          </div>
        </div>
      </ListItem>
    )
  }

  return (
    <React.Fragment>
      <article className={classes.root}>
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
}

export default component
