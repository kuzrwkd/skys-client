'use client';

import {Dashboard, Newspaper} from '@mui/icons-material';
import {Box, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import NuxtLink from 'next/link';
import React from 'react';
import Logo from '@/components/logo';
import {useAppSelector} from '@/redux/hooks';
import LogoIcon from '@/static/icons/logo.svg';

const classes = {
  root: (isOpen: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isOpen ? 200 : 74,
    borderRight: 'solid 1px',
    borderColor: 'grey.400',
    transition: 'width .3s ease-out',
  }),
  logoWrapper: {
    borderBottom: '1px solid',
    borderColor: 'grey.400',
    overflow: 'hidden',
  },
};

export const MAIN_MENU = [
  {
    name: 'ダッシュボード',
    href: '/dashboard',
    icon: Dashboard,
  },
  {
    name: 'ニュース',
    href: '/newsfeed',
    icon: Newspaper,
  },
] as const;

export default function MainNav() {
  const isMainNavOpen = useAppSelector(state => state.mainNavReducer.open);

  return (
    <Box component="aside" sx={classes.root(isMainNavOpen)}>
      <Box sx={classes.logoWrapper}>
        <Logo />
      </Box>
    </Box>
  );
}
