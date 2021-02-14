import React, { FC } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Aside from '@/interfaces/ui/components/organisms/aside'
import { useStyles } from './style'

const DefaultLayout: FC = ({ children }) => {
  const classes = useStyles()
  const [drawer, setDrawer] = React.useState({ isOpen: false, contents: '' })

  const handleDrawer = (contents: string) => {
    if (drawer.isOpen && contents === drawer.contents) {
      return setDrawer({ isOpen: false, contents })
    }

    return setDrawer({ isOpen: true, contents })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer.isOpen,
        })}
      >
        <Toolbar />
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <React.Fragment>
          <CssBaseline />
          {children}
        </React.Fragment>
      </main>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawer.isOpen,
          [classes.drawerClose]: !drawer.isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawer.isOpen,
            [classes.drawerClose]: !drawer.isOpen,
          }),
        }}
        anchor={'right'}
      >
        <div className={classes.toolbar}>{drawer.contents}</div>
        <Divider />
        <Aside handleDrawer={handleDrawer} />
      </Drawer>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout
