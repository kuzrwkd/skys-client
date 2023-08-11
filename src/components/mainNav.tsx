'use client';

import {Box, Typography} from '@mui/material';
import NuxtLink from 'next/link';
import React from 'react';
import LogoIcon from '@/static/icons/logo.svg';

const classes = {
  root: (isOpen: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isOpen ? 200 : 74,
    borderRight: 'solid 1px',
    borderColor: 'grey.400',
  }),
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    borderBottom: '1px solid',
    borderColor: 'grey.400',
    overflow: 'hidden',

    '& .logo': {
      display: 'inline-flex',
      alignItems: 'center',
    },
  },
  logoIcon: {
    display: 'flex',
    alignItems: 'center',
    px: 1,
    flex: 'none',
  },
  logoTitle: {
    flex: 'none',
  },
};

export default function MainNav() {
  const [isMainNavOpen, setMainNavOpen] = React.useState(false);

  const mainMenuIconHandler = () => {
    setMainNavOpen(!isMainNavOpen);
  };

  return (
    <Box component="aside" sx={classes.root(isMainNavOpen)}>
      <Box sx={classes.logoWrapper}>
        <NuxtLink className="logo" href="/">
          <Box sx={classes.logoIcon}>
            <LogoIcon width={58} height={58} />
          </Box>
          <Typography variant="h5" component="h1" sx={classes.logoTitle}>
            SKYS
          </Typography>
        </NuxtLink>
      </Box>
    </Box>
  );
}
