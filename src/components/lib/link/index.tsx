import {Anchor, createPolymorphicComponent} from '@mantine/core';
import NextLink from 'next/link';
import React from 'react';
import type {AnchorProps} from '@mantine/core';
import type {LinkProps as NextLinkProps} from 'next/link';

type Props = AnchorProps & NextLinkProps;

const Link = createPolymorphicComponent<'a', Props>(
  React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
    const {href, ...inheritProps} = props;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Anchor component={NextLink} href={href} {...inheritProps} />
    );
  }),
);

export default Link;
