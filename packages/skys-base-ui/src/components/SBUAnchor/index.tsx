import {Anchor, createPolymorphicComponent} from '@mantine/core';
import React from 'react';
import type {AnchorProps} from '@mantine/core';

const SBUAnchor = createPolymorphicComponent<'a', AnchorProps>(
  React.forwardRef<HTMLAnchorElement, AnchorProps>((props, _ref) => (
    <Anchor {...props} />
  )),
);

export {SBUAnchor};
export type {AnchorProps as SBUAnchorProps} from '@mantine/core';
