import {UrlObject} from 'url';
import {type SvgIconComponent} from '@mui/icons-material';
import {Box, ListItemButton, type ListItemButtonProps, ListItemIcon, ListItemText} from '@mui/material';
import React from 'react';
import Link from '@/components/features/link';

type MainNavListItemProps = {
  Icon: SvgIconComponent;
  href: string | UrlObject;
  label: string;
} & ListItemButtonProps;

const classes = {
  openMenuListItemWrapper: {
    px: 1.5,
    '& a': {
      px: 1,
    },
  },
  openMenuListItem: {
    whiteSpace: 'nowrap',
    borderRadius: 2,
    color: 'primary.main',
    mt: 0.25,
    textDecoration: 'none',
    '&:not(last-child)': {
      mb: 0.5,
    },
  },
  openIconWrapper: {
    minWidth: 24,
    mr: 1,
    ml: 0.5,
  },
};

export default function MainNavListItem(props: MainNavListItemProps) {
  const {Icon, href, label} = props;

  return (
    <Box sx={classes.openMenuListItemWrapper}>
      <ListItemButton sx={classes.openMenuListItem} component={Link} href={href}>
        <ListItemIcon sx={classes.openIconWrapper}>
          <Icon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            fontWeight: 'bold',
            variant: 'body2',
          }}
        />
      </ListItemButton>
    </Box>
  );
}
