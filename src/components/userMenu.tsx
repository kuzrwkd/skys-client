import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from '@mui/material/';
import React from 'react';

const classes = {
  userIcon: {
    mr: 2,
  },
};

const UserMenu: React.FC = () => {
  return (
    <IconButton sx={classes.userIcon} color="primary">
      <AccountCircleIcon />
    </IconButton>
  );
};

export default UserMenu;
