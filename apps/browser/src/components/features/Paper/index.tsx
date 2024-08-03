import {SBUPaper, SBUText} from '@skys-client/skys-base-ui';
import React from 'react';
import styles from './styles.module.css';

type PaperProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Paper(props: PaperProps) {
  const {children, title} = props;

  return (
    <SBUPaper className={styles.paper} shadow="xs" p="xl">
      {title && (
        <SBUText className={styles.title} component="h2">
          {title}
        </SBUText>
      )}
      {children}
    </SBUPaper>
  );
}
