import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import Paper from 'src/components/lib/Paper';
import Text from 'src/components/lib/Text';

type CardProps = {
  title?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

export default function Card(props: CardProps) {
  const {children, title, fullWidth} = props;
  const heading = title ?? '';
  const paperClassName = classnames({
    [styles.card]: true,
    [styles.fullWidth]: fullWidth,
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
