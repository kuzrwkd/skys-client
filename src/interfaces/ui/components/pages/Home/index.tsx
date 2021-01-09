import React, { FC } from 'react'
import DefaultLayout from '@/interfaces/ui/components/templates/default'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Chip from '@material-ui/core/Chip'
import NoSsr from '@material-ui/core/NoSsr'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ja'
import { useWindowDimensions } from '@/applications/usecases/stateful/windowDimensions'
import NikkeiLogo from '../../../images/logo/nikkei.svg'
import BloombergLogo from '../../../images/logo/bloomberg.svg'
import ReutersLogo from '../../../images/logo/reuters.svg'

const LOGO_HEIGHT = 40
const ARTICLE_TITLE_TOTAL_PADDING = 16
const ARTICLE_TITLE_BORDER = 1
const ITEM_SIZE = 112

dayjs.locale('ja')
dayjs.extend(relativeTime)

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
    logo: {
      height: LOGO_HEIGHT,
      width: '100%',
    },
    container: {
      overflow: 'hidden',
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
    listItemRelativeTime: {
      marginLeft: 8,
    },
  })
)

const Page: FC = () => {
  let { height } = useWindowDimensions()
  height =
    height - (LOGO_HEIGHT + ARTICLE_TITLE_TOTAL_PADDING + ARTICLE_TITLE_BORDER)

  const classes = useStyles()

  const {
    nikkeiNews,
    nikkeiMarkets,
    nikkeiTechnology,
    nikkeiBusiness,
    nikkeiEconomy,
    reutersBusiness,
    reutersEconomy,
    reutersForex,
    reutersOddlynough,
    reutersOil,
    reutersStock,
    reutersTechnology,
    reutersTop,
    reutersWorld,
    bloombergCommentary,
    bloombergDomestic,
    bloombergEconomy,
    bloombergMarkets,
    bloombergOverseas,
    bloombergTop,
  } = useSelector((state) => state)

  const nikkei = [
    ...nikkeiNews.data,
    ...nikkeiMarkets.data,
    ...nikkeiTechnology.data,
    ...nikkeiBusiness.data,
    ...nikkeiEconomy.data,
  ]
    .filter(
      (element, index, self) =>
        self.findIndex(
          (e) => e.title === element.title || e.link === element.link
        ) === index
    )
    .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))

  const reuters = [
    ...reutersBusiness.data,
    ...reutersEconomy.data,
    ...reutersForex.data,
    ...reutersOddlynough.data,
    ...reutersOil.data,
    ...reutersStock.data,
    ...reutersTechnology.data,
    ...reutersTop.data,
    ...reutersWorld.data,
  ]
    .filter(
      (element, index, self) =>
        self.findIndex(
          (e) => e.title === element.title || e.link === element.link
        ) === index
    )
    .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))

  const bloomberg = [
    ...bloombergCommentary.data,
    ...bloombergDomestic.data,
    ...bloombergEconomy.data,
    ...bloombergMarkets.data,
    ...bloombergOverseas.data,
    ...bloombergTop.data,
  ]
    .filter(
      (element, index, self) =>
        self.findIndex(
          (e) => e.title === element.title || e.link === element.link
        ) === index
    )
    .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))

  const nikkeiRenderRow = (props: ListChildComponentProps) => {
    const { index, style } = props
    const item = nikkei[index]
    const title = item.title
    const url = item.link
    const relativeTime = dayjs().to(dayjs(item.date))
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
            <Chip variant="outlined" size="small" label={category} />
            <div className={classes.listItemRelativeTime}>{relativeTime}</div>
          </div>
        </div>
      </ListItem>
    )
  }

  const reutersRenderRow = (props: ListChildComponentProps) => {
    const { index, style } = props
    const item = reuters[index]
    const title = item.title
    const url = item.link
    const relativeTime = dayjs().to(dayjs(item.date))
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
            <Chip variant="outlined" size="small" label={category} />
            <div className={classes.listItemRelativeTime}>{relativeTime}</div>
          </div>
        </div>
      </ListItem>
    )
  }

  const bloombergRenderRow = (props: ListChildComponentProps) => {
    const { index, style } = props
    const item = bloomberg[index]
    const title = item.title
    const url = item.link
    const relativeTime = dayjs().to(dayjs(item.date))
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
            <Chip variant="outlined" size="small" label={category} />
            <div className={classes.listItemRelativeTime}>{relativeTime}</div>
          </div>
        </div>
      </ListItem>
    )
  }

  return (
    <DefaultLayout>
      <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <article className={classes.root}>
                <header>
                  <h2 className={classes.articleTitle}>
                    <NikkeiLogo className={classes.logo} />
                  </h2>
                </header>
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
                          {nikkeiRenderRow}
                        </List>
                      )}
                    </AutoSizer>
                  </div>
                </NoSsr>
              </article>
            </Grid>
            <Grid item xs={4}>
              <article className={classes.root}>
                <header>
                  <h2 className={classes.articleTitle}>
                    <ReutersLogo className={classes.logo} />
                  </h2>
                </header>
                <NoSsr>
                  <div style={{ height }}>
                    <AutoSizer>
                      {({ height, width }) => (
                        <List
                          height={height}
                          width={width}
                          itemSize={ITEM_SIZE}
                          itemCount={reuters.length}
                        >
                          {reutersRenderRow}
                        </List>
                      )}
                    </AutoSizer>
                  </div>
                </NoSsr>
              </article>
            </Grid>
            <Grid item xs={4}>
              <article className={classes.root}>
                <header>
                  <h2 className={classes.articleTitle}>
                    <BloombergLogo className={classes.logo} />
                  </h2>
                </header>
                <NoSsr>
                  <div style={{ height }}>
                    <AutoSizer>
                      {({ height, width }) => (
                        <List
                          height={height}
                          width={width}
                          itemSize={ITEM_SIZE}
                          itemCount={bloomberg.length}
                        >
                          {bloombergRenderRow}
                        </List>
                      )}
                    </AutoSizer>
                  </div>
                </NoSsr>
              </article>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </DefaultLayout>
  )
}

export default Page
