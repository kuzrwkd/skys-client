import {Box} from '@mui/material';
import React from 'react';

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 74,
    borderLeft: 'solid 1px',
    borderColor: 'grey.400',
  },
  subMenuToggleButton: {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    borderBottom: '1px solid',
    borderColor: 'grey.400',
  },
};

export default function SubNav() {
  return (
    <Box component="aside" sx={classes.root}>
      <Box sx={classes.subMenuToggleButton}></Box>
    </Box>
  );
}
