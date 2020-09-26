import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/layout/header/main'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const DefaultLayout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <Container maxWidth="xl">
          <main>{children}</main>
        </Container>
      </Header>
    </React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout
