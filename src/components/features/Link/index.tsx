import NextLink from 'next/link';
import React from 'react';
import type {LinkProps} from 'next/link';
import SBUAnchor from '@/packages/skys-base-ui/SBUAnchor';

type Props = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

export default function Link(props: Props) {
  const {href, children, ...rest} = props;
  const isInternalLink = href.toString().startsWith('/');

  return (
    <SBUAnchor
      component={NextLink}
      href={href}
      {...rest}
      target={isInternalLink ? undefined : '_blank'}
      rel={isInternalLink ? undefined : 'noopener noreferrer'}
    >
      {children}
    </SBUAnchor>
  );
}
