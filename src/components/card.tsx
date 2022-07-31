import { Paper, Typography, type PaperProps } from '@mui/material';
import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
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

const Card: FC<CardProps> = (props) => {
  const { children, title = undefined, fullWidth = false, ...rest } = props;
  return (
    <Paper {...rest} sx={classes.paper(fullWidth)}>
      {!title ? (
        ''
      ) : (
        <Typography sx={classes.title} variant="h4">
          {title}
        </Typography>
      )}
      {children}
    </Paper>
  );
};

export default Card;
