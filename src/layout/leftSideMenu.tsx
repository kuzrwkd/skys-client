import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NuxtLink from 'next/link';
import React from 'react';

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
    name: 'お問い合わせ',
    href: '/customer',
    icon: ChatIcon,
  },
] as const;

const classes = {
  openMenuListItemWrap: {
    px: 1.5,
    '& a': {
      px: 1,
    },
  },
  openMenuListItem: (value: boolean) => ({
    whiteSpace: 'nowrap',
    borderRadius: 2,
    color: value ? 'primary.main' : 'text.primary',
    '&:not(last-child)': {
      mb: 0.5,
    },
  }),
  closeMenuIconWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 48,
    ml: 1.5,
    '&:not(last-child)': {
      mb: 0.5,
    },
  },
  iconWrap: {
    minWidth: 24,
    mr: 1,
  },
  icon: {
    color: 'primary.main',
  },
};

type LeftSideMenuProps = {
  open: boolean;
};

const LeftSideMenu: React.FC<LeftSideMenuProps> = (props) => {
  const { open } = props;

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index: number) => setSelectedIndex(index);

  return (
    <List>
      {MAIN_MENU.map(({ name, href, icon: Icon }, i) => {
        return (
          <li key={i}>
            {!open ? (
              <Box sx={classes.closeMenuIconWrap}>
                <NuxtLink href={href}>
                  <IconButton color="primary">
                    <Icon />
                  </IconButton>
                </NuxtLink>
              </Box>
            ) : (
              <Box sx={classes.openMenuListItemWrap}>
                <NuxtLink href={href}>
                  <ListItemButton
                    sx={classes.openMenuListItem(selectedIndex === i)}
                    component="a"
                    selected={selectedIndex === i}
                    onClick={() => handleListItemClick(i)}
                    disableRipple
                  >
                    <ListItemIcon sx={classes.iconWrap}>
                      <Icon sx={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </NuxtLink>
              </Box>
            )}
          </li>
        );
      })}
    </List>
  );
};

export default LeftSideMenu;
