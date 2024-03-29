import {Box} from '@mui/material';
import React from 'react';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import ManinNav from '@/components/layouts/mainNav';
import SubNav from '@/components/layouts/subNav';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  contentsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'grey.50',
    overflow: 'hidden',
  },
  contents: {
    flex: 1,
    p: 1,
    overflow: 'auto',
  },
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const {children} = props;

  return (
    <Box sx={classes.root}>
      <Box sx={{display: 'flex', flex: 1, overflow: 'hidden'}}>
        <ManinNav />
        <Box sx={classes.contentsWrapper}>
          <Header />
          <Box sx={classes.main} component="main">
            <Box sx={classes.contents}>{children}</Box>
            <SubNav />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
