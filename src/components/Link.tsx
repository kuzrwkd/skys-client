import { Link as MuiLink } from '@mui/material';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type LinkProps = {
  href: NextLinkProps['href'];
  target?: string;
  children?: React.ReactNode;
};

const Link: React.FC<LinkProps> = (props) => (
  <NextLink href={props.href} passHref>
    <MuiLink target={props.target || '_self'} rel="noopener noreferrer">
      {props.children}
    </MuiLink>
  </NextLink>
);

export default Link;
