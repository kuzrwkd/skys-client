'use client';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import {Box, IconButton, List} from '@mui/material';
import React from 'react';
import Link from '@/components/features/link';
import Logo from '@/components/features/logo';
import MainNavListItem from '@/components/layouts/mainNav/mainNavListItem';
import {useAppSelector} from '@/redux/hooks';

function styles(isOpen: boolean) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: isOpen ? 200 : 74,
      minWidth: isOpen ? 200 : 74,
      borderRight: 'solid 1px',
      borderColor: 'grey.400',
      transition: 'all .3s ease-out',
    },
    logoWrapper: {
      borderBottom: '1px solid',
      borderColor: 'grey.400',
      overflow: 'hidden',
    },
    closeMenuIconWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: 48,
      ml: 2,
    },
  };
}

export const MAIN_MENU = [
  {
    label: 'ニュース',
    href: '/newsfeed',
    icon: NewspaperIcon,
  },
] as const;

export default function MainNav() {
  const isMainNavOpen = useAppSelector(state => state.layoutReducer.isMainNavOpen);
  const classes = styles(isMainNavOpen);

  return (
    <Box component="aside" sx={classes.root}>
      <Box sx={classes.logoWrapper}>
        <Logo />
      </Box>
      <List>
        {MAIN_MENU.map(item => {
          const {label, href, icon: Icon} = item;

          return (
            <li key={`list-item-${href}`}>
              {!isMainNavOpen ? (
                <Box sx={classes.closeMenuIconWrapper}>
                  <IconButton color="primary" component={Link} href={href}>
                    <Icon />
                  </IconButton>
                </Box>
              ) : (
                <MainNavListItem label={label} href={href} Icon={Icon} />
              )}
            </li>
          );
        })}
      </List>
    </Box>
  );
}
