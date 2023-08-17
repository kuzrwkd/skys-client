import {Box, Typography} from '@mui/material';
import React from 'react';
import Link from '@/components/features/link';
import LogoIcon from '@/static/icons/logo.svg';

const classes = {
  logo: {
    display: 'flex',
    alignItems: 'center',
    height: 63,
    '& a': {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
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
      <Link href="/">
        <Box sx={classes.logoIcon}>
          <LogoIcon width={58} height={58} />
        </Box>
        <Typography variant="h5" component="h1" sx={classes.logoTitle}>
          SKYS
        </Typography>
      </Link>
    </Box>
  );
}
