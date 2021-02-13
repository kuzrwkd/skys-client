import React, { FC } from 'react'
import DefaultLayout from '@/interfaces/ui/components/templates/default'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import RssList from '@/interfaces/ui/components/organisms/RssList'
import NikkeiLogo from '../../../images/logo/nikkei.svg'
import BloombergLogo from '../../../images/logo/bloomberg.svg'
import ReutersLogo from '../../../images/logo/reuters.svg'
import CointelegraphLogo from '../../../images/logo/cointelegraph.svg'
import PropsType from 'prop-types'
import { Props } from './types'

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

const Home: FC<Props> = ({ fetchData }) => {
  const classes = useStyles()

  const { nikkei, reuters, bloomberg, coinTelegraph } = fetchData

  return (
    <DefaultLayout>
      <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <RssList data={nikkei.data} logoHeight={LOGO_HEIGHT}>
                <NikkeiLogo className={classes.logo} />
              </RssList>
            </Grid>
            <Grid item xs={3}>
              <RssList data={reuters.data} logoHeight={LOGO_HEIGHT}>
                <ReutersLogo className={classes.logo} />
              </RssList>
            </Grid>
            <Grid item xs={3}>
              <RssList data={bloomberg.data} logoHeight={LOGO_HEIGHT}>
                <BloombergLogo className={classes.logo} />
              </RssList>
            </Grid>
            <Grid item xs={3}>
              <RssList data={coinTelegraph.data} logoHeight={LOGO_HEIGHT}>
                <CointelegraphLogo className={classes.logo} />
              </RssList>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </DefaultLayout>
  )
}

Home.propTypes = {
  fetchData: PropsType.any.isRequired,
}

export default Home
