import React, { FC } from 'react'
import PropTypes from 'prop-types'
import DrawerAppBar from '@/components/layout/drawerAppBar/main'
import CssBaseline from '@material-ui/core/CssBaseline'

const DefaultLayout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <DrawerAppBar>{children}</DrawerAppBar>
    </React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout
