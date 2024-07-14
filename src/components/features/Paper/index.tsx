import React from 'react';
import styles from './styles.module.css';
import Typography from '@/components/features/Typography';
import SBUPaper from '@/packages/skys-base-ui/SBUPaper';

type PaperProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Paper(props: PaperProps) {
  const {children, title} = props;

  return (
    <SBUPaper className={styles.paper} shadow="xs" p="xl">
      {title && (
        <Typography className={styles.title} component="h2">
          {title}
        </Typography>
      )}
      {children}
    </SBUPaper>
  );
}
