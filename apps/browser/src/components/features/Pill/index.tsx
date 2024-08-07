import {SBUPill} from '@skys-client/skys-base-ui';
import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import type {SBUPillProps} from '@skys-client/skys-base-ui';

type Props = {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
} & SBUPillProps;

export default function Pill(props: Props) {
  const {color, ...rest} = props;
  const rootClassName = classnames({
    [styles['fill-primary']]: color === 'primary',
  });

  return (
    <SBUPill
      {...rest}
      classNames={{
        root: rootClassName,
      }}
    />
  );
}
