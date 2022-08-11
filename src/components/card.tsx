import { Paper, Typography, type PaperProps } from '@mui/material';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
} & PaperProps;

const classes = {
  paper: (fullWidth: boolean) => ({
    p: 3,
    width: fullWidth ? '100%' : 'initial',
  }),
  title: {
    mb: 3,
  },
};

const Card: React.FC<CardProps> = (props) => {
  const { children, title = undefined, fullWidth = false, ...rest } = props;
  return (
    <Paper {...rest} sx={classes.paper(fullWidth)}>
      {!title ? (
        ''
      ) : (
        <Typography sx={classes.title} variant="h5">
          <b>{title}</b>
        </Typography>
      )}
      {children}
    </Paper>
  );
};

export default Card;
