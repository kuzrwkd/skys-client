import {Paper, Typography, type PaperProps} from '@mui/material';
import React from 'react';

type CardProps = {
  title?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
} & PaperProps;

const styles = (fullWidth?: boolean) => ({
  paper: {
    p: 3,
    width: fullWidth ? '100%' : 'initial',
  },
  title: {
    mb: 3,
  },
});

export default function Card(props: CardProps) {
  const {children, title, fullWidth} = props;
  const heading = title ?? '';

  const classes = styles(fullWidth);

  return (
    <Paper sx={classes.paper}>
      <Typography sx={classes.title} variant="h5">
        <b>{heading}</b>
      </Typography>
      {children}
    </Paper>
  );
}
