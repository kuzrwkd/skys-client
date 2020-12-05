import React, { FC } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'

const DefaultLayout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout
