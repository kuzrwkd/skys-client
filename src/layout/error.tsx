import React, { FC } from 'react'
import PropTypes from 'prop-types'

const ErrorLayout: FC = ({ children }) => {
  return <>{children}</>
}

ErrorLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ErrorLayout
