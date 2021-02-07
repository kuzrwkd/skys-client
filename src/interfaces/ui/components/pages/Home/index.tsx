import React, { FC } from 'react'
import DefaultLayout from '@/interfaces/ui/components/templates/default'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import RssList from '@/interfaces/ui/components/organisms/RssList'
import NikkeiLogo from '../../../images/logo/nikkei.svg'
import BloombergLogo from '../../../images/logo/bloomberg.svg'
import ReutersLogo from '../../../images/logo/reuters.svg'
import CointelegraphLogo from '../../../images/logo/cointelegraph.svg'

const LOGO_HEIGHT = 40

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      overflow: 'hidden',
    },
    logo: {
      height: LOGO_HEIGHT,
      width: '100%',
    },
  })
)

const Page: FC = () => {
  const classes = useStyles()

  const {
    nikkeiNews,
    nikkeiMarkets,
    nikkeiTechnology,
    nikkeiBusiness,
    nikkeiEconomy,
    reuters,
    bloombergCommentary,
    bloombergDomestic,
    bloombergEconomy,
    bloombergMarkets,
    bloombergOverseas,
    bloombergTop,
    cointelegraphAll,
  } = useSelector((state) => state)

  const nikkei = [
    ...nikkeiNews.data,
    ...nikkeiMarkets.data,
    ...nikkeiTechnology.data,
    ...nikkeiBusiness.data,
    ...nikkeiEconomy.data,
  ]

  const bloomberg = [
    ...bloombergCommentary.data,
    ...bloombergDomestic.data,
    ...bloombergEconomy.data,
    ...bloombergMarkets.data,
    ...bloombergOverseas.data,
    ...bloombergTop.data,
  ]

  const cointelegraph = [...cointelegraphAll.data]

  return (
    <DefaultLayout>
      <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <RssList data={nikkei} logoHeight={LOGO_HEIGHT}>
                <NikkeiLogo className={classes.logo} />
              </RssList>
            </Grid>
            <Grid item xs={3}>
              <RssList data={reuters.data} logoHeight={LOGO_HEIGHT}>
                <ReutersLogo className={classes.logo} />
              </RssList>
            </Grid>
            <Grid item xs={3}>
              <RssList data={bloomberg} logoHeight={LOGO_HEIGHT}>
                <BloombergLogo className={classes.logo} />
              </RssList>
            </Grid>
            <Grid item xs={3}>
              <RssList data={cointelegraph} logoHeight={LOGO_HEIGHT}>
                <CointelegraphLogo className={classes.logo} />
              </RssList>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </DefaultLayout>
  )
}

export default Page
