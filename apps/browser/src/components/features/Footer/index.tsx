import {SBUText} from '@skys-client/skys-base-ui';
import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SBUText className={styles.copy} size="xs">
        &copy; Masu inc.
      </SBUText>
    </footer>
  );
}
