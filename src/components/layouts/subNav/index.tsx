'use client';

import {Box} from '@mui/material';
import React from 'react';
import {useAppSelector} from '@/redux/hooks';

const classes = {
  root: (isOpen: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: isOpen ? 375 : 74,
    width: isOpen ? 375 : 74,
    borderLeft: 'solid 1px',
    borderColor: 'grey.400',
    transition: 'all .3s ease-out',
    backgroundColor: 'pureWhite.main',
  }),
};

export default function SubNav() {
  const isSubNavOpen = useAppSelector(state => state.layoutReducer.isSubNavOpen);

  return <Box component="aside" sx={classes.root(isSubNavOpen)} />;
}
