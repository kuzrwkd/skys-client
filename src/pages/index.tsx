import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import DefaultLayout from '@/layout/default'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/redux/counter/reducer'

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
  const classes = useStyles()

  const dispatch = useDispatch()
  const { counter } = useSelector((state) => state)
  console.log(counter)
  const countUp = () => {
    dispatch(increment(1))
  }

  const countDown = () => {
    dispatch(decrement(1))
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
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </DefaultLayout>
  )
}

export default Page
