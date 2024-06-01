import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.copy}>
        <small>&copy; Masu inc.</small>
      </div>
    </footer>
  );
}
