import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import LibPaper from '@/components/lib/Paper';
import LibText from '@/components/lib/Text';

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
    <LibPaper className={paperClassName} shadow="xs" p="xl">
      <LibText className={styles.title}>
        <b>{heading}</b>
      </LibText>
      {children}
    </LibPaper>
  );
}
