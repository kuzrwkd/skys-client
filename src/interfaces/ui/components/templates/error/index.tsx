import React, { FC } from 'react'
import PropTypes from 'prop-types'

const ErrorLayout: FC = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

ErrorLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ErrorLayout
