import {Box} from '@mui/material';
import React from 'react';

const classes = {
  root: {
    height: 64,
    borderBottom: '1px solid',
    borderColor: 'grey.400',
    p: 0.5,
  },
};

export default function Header() {
  return <Box sx={classes.root} component="header"></Box>;
}
