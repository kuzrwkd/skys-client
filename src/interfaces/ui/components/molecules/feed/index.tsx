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
import clsx from 'clsx'

dayjs.locale('ja')
dayjs.extend(relativeTime)
const DEFAULT_ITEM_SIZE = 85
const DEFAULT_THUMBNAIL = 'not'

const component: FC<Props> = ({ data, itemSize, thumbnail }) => {
  let { height } = useWindowDimensions()
  height = height - 65
  const classes = useStyles()

  const row = (props: ListChildComponentProps) => {
    const { index, style } = props
    const thumbSize = thumbnail ?? DEFAULT_THUMBNAIL
    const item = data[index]
    const title = item.title
    const image =
      Object.keys(item.thumbnail).length > 0 ? item.thumbnail.url : null
    const url = item.link
    const relativeTime = dayjs().to(dayjs(String(item.date)))
    const organization = item.organization
    const author = item.author

    const renderFigure = () => {
      return (
        <figure className={classes.listItemFigure}>
          <Link
            href={url}
            className={classes.listItemText}
            target="_blank"
            rel="noopener noreferrer"
          >
            {image !== null ? (
              <React.Fragment>
                <div className={classes.listItemThumbnailWrapper}>
                  <img
                    src={image}
                    alt={title}
                    className={classes.listItemThumbnail}
                  />
                </div>
                <figcaption
                  className={clsx(
                    classes.listItemTitle,
                    classes.listItemTitleYoutube
                  )}
                >
                  {title}
                </figcaption>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src="" alt="" />
                <figcaption
                  className={clsx(
                    classes.listItemTitle,
                    classes.listItemTitleYoutube
                  )}
                >
                  {title}
                </figcaption>
              </React.Fragment>
            )}
          </Link>
        </figure>
      )
    }

    return (
      <ListItem className={classes.listItem} style={style} key={index}>
        <div className={classes.listItemInnerWrapper}>
          {thumbSize === 'not' ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={classes.listItemAuthor}>
                <b>{author}</b>
              </div>
              {renderFigure()}
              <div
                className={clsx(
                  classes.listItemMetaBox,
                  classes.listItemMetaBoxColumnLayout
                )}
              >
                <div>{relativeTime}</div>
              </div>
            </React.Fragment>
          )}
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
                  itemSize={itemSize ?? DEFAULT_ITEM_SIZE}
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
  itemSize: PropsType.number,
  thumbnail: PropsType.oneOf([
    'small',
    'middle',
    'large',
    'not',
    null,
    undefined,
  ]),
}

export default component
