'use client';

import {Link as MuiLink} from '@mui/material';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import React, {ReactNode} from 'react';

type LinkProps =
  | (NextLinkProps & {
      external?: false;
      children: ReactNode;
    })
  | {
      external: true;
      href: string;
      children: ReactNode;
    };

export default function Link(props: LinkProps) {
  const {external, children, href, ...inheritProps} = props;

  if (!external) {
    return (
      <MuiLink component="div">
        <NextLink href={href} {...inheritProps}>
          {children}
        </NextLink>
      </MuiLink>
    );
  }

  return (
    <MuiLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </MuiLink>
  );
}
