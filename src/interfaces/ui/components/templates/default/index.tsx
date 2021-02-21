import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Aside from '@/interfaces/ui/components/organisms/aside'
import { useStyles } from './style'
import { ASIDE_MENU_ID } from '@/utils/constants/ids'

const DefaultLayout: FC = ({ children }) => {
  const { asideNewsId } = ASIDE_MENU_ID
  const classes = useStyles()
  const [drawer, setDrawer] = useState<{
    contents: string
    menuId: null | number
  }>({
    contents: 'ニュース',
    menuId: asideNewsId,
  })

  const handleDrawer = (contents: string, menuId: number) => {
    if (menuId === drawer.menuId) {
      return setDrawer({ contents, menuId })
    }

    return setDrawer({ contents, menuId })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
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
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={'right'}
      >
        <div className={classes.toolbar}>
          <b>{drawer.contents}</b>
        </div>
        <Divider />
        <Aside handleDrawer={handleDrawer} drawer={drawer} />
      </Drawer>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout