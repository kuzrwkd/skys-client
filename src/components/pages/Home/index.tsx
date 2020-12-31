import React, { FC } from 'react'
import DefaultLayout from '@/components/templates/default'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { useSelector } from 'react-redux'

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

const Page: FC = () => {
  const classes = useStyles()

  const { nikkei } = useSelector((state) => state)

  return (
    <DefaultLayout>
      <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ul>
                  {nikkei.data.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </DefaultLayout>
  )
}

export default Page
