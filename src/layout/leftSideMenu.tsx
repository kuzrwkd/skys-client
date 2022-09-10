import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NuxtLink from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectAppReducer } from '@/redux/appReducer';

export const MAIN_MENU = [
  {
    name: 'ダッシュボード',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'ニュース',
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
    color: value ? 'primary.main' : 'inherit',
    mt: 0.25,
    '&:not(last-child)': {
      mb: 0.5,
    },
  }),
  openIconWrap: {
    minWidth: 24,
    mr: 1,
  },
  icon: {
    color: 'primary.main',
  },
  closeMenuIconWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 48,
    ml: 1.5,
  },
};

type LeftSideMenuProps = {
  open: boolean;
};

const LeftSideMenu: React.FC<LeftSideMenuProps> = (props) => {
  const { open } = props;
  const { route } = useSelector(selectAppReducer());
  const [useRoute, setRoute] = React.useState(route);

  React.useEffect(() => {
    setRoute(route);
  }, [route]);

  return (
    <List>
      {MAIN_MENU.map((item, i) => {
        const { name, href, icon: Icon } = item;

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
                    sx={classes.openMenuListItem(href === useRoute)}
                    component="a"
                    selected={href === useRoute}
                  >
                    <ListItemIcon sx={classes.openIconWrap}>
                      <Icon sx={classes.icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        variant: 'body2',
                      }}
                    />
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
