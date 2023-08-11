'use client'

import {Box} from '@mui/material'
import React from 'react'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const classes = {
  root: {
    display: 'flex',
  },
  contents: {},
  leftAside: (isMenuOpen: boolean) => ({
    display: 'flex',
    flexDirection: 'flex-col',
    height: '100vh',
    width: isMenuOpen ? 250 : 500,
  }),
  rightAside: {},
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  const {children} = props
  const [isLeftMenuOpen, setLeftMenuOpen] = React.useState(true)

  const mainMenuIconHandler = () => {
    setLeftMenuOpen(!isLeftMenuOpen)
  }

  return (
    <Box sx={classes.root}>
      <Box component="aside" sx={classes.leftAside(isLeftMenuOpen)}></Box>
      <Box sx={classes.contents}>
        <header></header>
        <main>
          <div>{children}</div>
          <footer>
            <div>
              <small>&copy; Masudaya inc.</small>
            </div>
          </footer>
        </main>
      </Box>
      <Box component="aside" sx={classes.rightAside}></Box>
    </Box>
  )
}
