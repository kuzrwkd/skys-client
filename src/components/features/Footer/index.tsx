import React from 'react';
import styles from './styles.module.css';
import Typography from '@/components/features/Typography';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography className={styles.copy} size="xs">
        &copy; Masu inc.
      </Typography>
    </footer>
  );
}
