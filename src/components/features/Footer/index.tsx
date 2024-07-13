import React from 'react';
import styles from './styles.module.css';
import Text from 'src/components/lib/Text';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text className={styles.copy} size="xs">
        &copy; Masu inc.
      </Text>
    </footer>
  );
}
