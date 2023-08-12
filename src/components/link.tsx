'use client';

import {Link as MuiLink} from '@mui/material';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import React, {ReactNode} from 'react';

type LinkProps =
  | (NextLinkProps & {
      external?: false;
      underline?: boolean;
      children: ReactNode;
    })
  | {
      external: true;
      underline?: boolean;
      href: string;
      children: ReactNode;
    };

function styles(underline?: boolean) {
  return {
    root: {
      textDecoration: underline ? 'underline' : 'none',
    },
  };
}

export default function Link(props: LinkProps) {
  const {external, underline, href, children, ...inheritProps} = props;

  const classes = styles(underline);

  if (!external) {
    return (
      <MuiLink sx={classes.root} component="div">
        <NextLink href={href} {...inheritProps}>
          {children}
        </NextLink>
      </MuiLink>
    );
  }

  return (
    <MuiLink sx={classes.root} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </MuiLink>
  );
}
