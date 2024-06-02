import React from 'react';
import styles from './styles.module.scss';
import Text from '@/components/lib/text';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <Text className={styles.Footer__Copy} size="xs">
        &copy; Masu inc.
      </Text>
    </footer>
  );
}
