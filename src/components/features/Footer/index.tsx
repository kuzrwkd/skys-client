import React from 'react';
import styles from './styles.module.css';
import LibText from 'src/components/lib/Text';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LibText className={styles.copy} size="xs">
        &copy; Masu inc.
      </LibText>
    </footer>
  );
}
