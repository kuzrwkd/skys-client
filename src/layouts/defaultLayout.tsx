import {Box} from '@mui/material';
import React from 'react';
import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import ManinNav from 'src/layouts/mainNav';
import SubNav from 'src/layouts/subNav';

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
  },
  contents: {
    flex: 1,
    p: 1,
  },
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const {children} = props;

  return (
    <Box sx={classes.root}>
      <Box sx={{display: 'flex', flex: 1}}>
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
