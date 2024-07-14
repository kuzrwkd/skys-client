import {Anchor, createPolymorphicComponent} from '@mantine/core';
import React from 'react';
import type {AnchorProps} from '@mantine/core';

type Props = AnchorProps;

const Component = createPolymorphicComponent<'a', Props>(
  React.forwardRef<HTMLAnchorElement, Props>((props, _ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Anchor {...props} />
  )),
);

export default Component;
