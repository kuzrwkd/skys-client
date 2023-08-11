import {Box} from '@mui/material';
import React from 'react';

const classes = {
  root: {
    borderTop: '1px solid',
    borderColor: 'grey.400',
    py: 0.5,
    px: 1,
  },
  copy: {
    textAlign: 'right',
  },
};

export default function Footer() {
  return (
    <Box sx={classes.root} component="footer">
      <Box sx={classes.copy}>
        <small>&copy; Masudaya inc.</small>
      </Box>
    </Box>
  );
}
