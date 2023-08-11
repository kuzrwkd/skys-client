'use client';

import {AccountCircle} from '@mui/icons-material';
import {Box, IconButton} from '@mui/material';
import React from 'react';
import {useAppSelector} from '@/redux/hooks';

const classes = {
  root: (isOpen: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isOpen ? 200 : 74,
    borderLeft: 'solid 1px',
    borderColor: 'grey.400',
    transition: 'width .3s ease-out',
    backgroundColor: 'pureWhite.main',
  }),
};

export default function SubNav() {
  const isSubNavOpen = useAppSelector(state => state.subNavReducer.open);

  return <Box component="aside" sx={classes.root(isSubNavOpen)}></Box>;
}
