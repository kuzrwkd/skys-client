import {Paper, Text} from '@mantine/core';
import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

type CardProps = {
  title?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

export default function Card(props: CardProps) {
  const {children, title, fullWidth} = props;
  const heading = title ?? '';
  const paperClassName = classnames({
    [styles.paper]: true,
    [styles['paper-full-width']]: fullWidth,
  });

  return (
    <Paper className={paperClassName} shadow="xs" p="xl">
      <Text className={styles.title}>
        <b>{heading}</b>
      </Text>
      {children}
    </Paper>
  );
}
