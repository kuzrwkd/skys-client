import {Box, Typography} from '@mui/material';
import NuxtLink from 'next/link';
import React from 'react';
import LogoIcon from '@/static/icons/logo.svg';

const classes = {
  logo: {
    display: 'flex',
    alignItems: 'center',
    height: 63,
    '& .link': {
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

export default function Logo() {
  return (
    <Box sx={classes.logo}>
      <NuxtLink className="link" href="/">
        <Box sx={classes.logoIcon}>
          <LogoIcon width={58} height={58} />
        </Box>
        <Typography variant="h5" component="h1" sx={classes.logoTitle}>
          SKYS
        </Typography>
      </NuxtLink>
    </Box>
  );
}
