import React, { FC } from 'react'
import DefaultLayout from '@/interfaces/ui/components/templates/default'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import NoSsr from '@material-ui/core/NoSsr'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import dayjs from 'dayjs'
import { useWindowDimensions } from '@/utils/windowDimensions'
import NikkeiLogo from '../../../images/logo/nikkei.svg'
import BloombergLogo from '../../../images/logo/bloomberg.svg'
import ReutersLogo from '../../../images/logo/reuters.svg'

const LOGO_HEIGHT = 70
const ITEM_SIZE = 50

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      flex: 1,
      backgroundColor: theme.palette.background.paper,
    },
    container: {
      overflow: 'hidden',
    },
    listItem: {
      cursor: 'auto',
    },
    logo: {
      height: LOGO_HEIGHT,
      width: '100%',
    },
  })
)

const Page: FC = () => {
  let { height } = useWindowDimensions()
  height = height - LOGO_HEIGHT

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
        self.findIndex((e) => e.link === element.link) === index
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
        self.findIndex((e) => e.link === element.link) === index
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
        self.findIndex((e) => e.link === element.link) === index
    )
    .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))

  const nikkeiRenderRow = (props: ListChildComponentProps) => {
    const { index, style } = props

    return (
      <ListItem button className={classes.listItem} style={style} key={index}>
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

  const reutersRenderRow = (props: ListChildComponentProps) => {
    const { index, style } = props

    return (
      <ListItem button className={classes.listItem} style={style} key={index}>
        <Link
          href={`${reuters[index].link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary={`${reuters[index].title}`} />
        </Link>
      </ListItem>
    )
  }

  const bloombergRenderRow = (props: ListChildComponentProps) => {
    const { index, style } = props

    return (
      <ListItem button className={classes.listItem} style={style} key={index}>
        <Link
          href={`${bloomberg[index].link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary={`${bloomberg[index].title}`} />
        </Link>
      </ListItem>
    )
  }

  return (
    <DefaultLayout>
      <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={classes.root}>
                <NikkeiLogo className={classes.logo} />
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
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.root}>
                <ReutersLogo className={classes.logo} />
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
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.root}>
                <BloombergLogo className={classes.logo} />
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
              </div>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </DefaultLayout>
  )
}

export default Page
