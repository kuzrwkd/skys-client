'use client';

import {AccountCircle} from '@mui/icons-material';
import {Box, IconButton} from '@mui/material';
import React from 'react';
import {toggle as mainNavToggle} from '@/redux/features/mainNavSlice';
import {toggle as subNavToggle} from '@/redux/features/subNavSlice';
import {useAppDispatch} from '@/redux/hooks';
import MenuLeftIcon from '@/static/icons/menuLeft.svg';
import MenuRightIcon from '@/static/icons/menuRight.svg';

const classes = {
  root: {
    height: 64,
    borderBottom: '1px solid',
    borderColor: 'grey.400',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainNavButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  mainNavButton: {
    ml: 1,
  },
  headerRightArea: {
    display: 'flex',
  },
  subNavButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  subNavButton: {
    mr: 1,
  },
  accountButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: 74,
    borderLeft: '1px solid',
    borderColor: 'grey.400',
  },
};

export default function Header() {
  const dispatch = useAppDispatch();

  const mainNavToggleHandler = React.useCallback(() => {
    dispatch(mainNavToggle());
  }, [dispatch]);

  const subNavToggleHandler = React.useCallback(() => {
    dispatch(subNavToggle());
  }, [dispatch]);

  return (
    <Box sx={classes.root} component="header">
      <Box sx={classes.mainNavButtonWrapper}>
        <IconButton sx={classes.mainNavButton} onClick={mainNavToggleHandler}>
          <MenuLeftIcon width={24} height={24} />
        </IconButton>
      </Box>
      <Box sx={classes.headerRightArea}>
        <Box sx={classes.subNavButtonWrapper}>
          <IconButton sx={classes.subNavButton} onClick={subNavToggleHandler}>
            <MenuRightIcon width={24} height={24} />
          </IconButton>
        </Box>
        <Box sx={classes.accountButtonWrapper}>
          <IconButton size="large">
            <AccountCircle fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
