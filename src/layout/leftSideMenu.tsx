import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NuxtLink from 'next/link';
import React, { FC } from 'react';

export const MAIN_MENU = [
  {
    name: 'ダッシュボード',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'ニュースフィード',
    href: '/newsfeed',
    icon: NewspaperIcon,
  },
  {
    name: 'チャート',
    href: '/chart',
    icon: CandlestickChartIcon,
  },
  {
    name: 'コンタクト',
    href: '/customer',
    icon: ChatIcon,
  },
] as const;

const classes = {
  openMenuListItem: {
    whiteSpace: 'nowrap',
    ml: 0.5,
  },
  closeMenuIconWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 48,
  },
  iconWrap: {
    minWidth: 24,
    mr: 1,
  },
  icon: {
    color: 'primary.main',
  },
};

type MenuProps = {
  open: boolean;
};

const LeftSideMenu: FC<MenuProps> = (props) => {
  const { open } = props;
  return (
    <List>
      {MAIN_MENU.map(({ name, href, icon: Icon }, i) => {
        return (
          <>
            {!open ? (
              <li key={i}>
                <Box sx={classes.closeMenuIconWrap}>
                  <NuxtLink href={href}>
                    <IconButton color="primary">
                      <Icon />
                    </IconButton>
                  </NuxtLink>
                </Box>
              </li>
            ) : (
              <li key={i}>
                <NuxtLink href={href}>
                  <ListItemButton sx={classes.openMenuListItem} component="a">
                    <ListItemIcon sx={classes.iconWrap}>
                      <Icon sx={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </NuxtLink>
              </li>
            )}
          </>
        );
      })}
    </List>
  );
};

export default LeftSideMenu;
