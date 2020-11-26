import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import DefaultLayout from '@/layout/default'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/redux/counter/reducer'
import Link from '@/components/atoms/Link/main'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
)

const Page: NextPage = () => {
  const PAYLOAD_COUNT = 1
  const classes = useStyles()

  const dispatch = useDispatch()
  const { counter } = useSelector((state) => state)

  const countUp = () => {
    dispatch(increment(PAYLOAD_COUNT))
  }

  const countDown = () => {
    dispatch(decrement(PAYLOAD_COUNT))
  }

  return (
    <DefaultLayout>
      <React.Fragment>
        <Head>
          <title>Create Next App</title>
        </Head>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <p>You clicked {counter.num} times</p>
                <button onClick={() => countUp()}>INCREMENT</button>
                <button onClick={() => countDown()}>DECREMENT</button>
              </Paper>
              <Link page="http://www.facebook.com">Facebook</Link>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </DefaultLayout>
  )
}

Page.getInitialProps = async () => {
  return { title: 'TOP' }
}

export default Page
