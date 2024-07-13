import React from 'react';
import styles from './styles.module.scss';
import Text from 'src/components/lib/Text';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <Text className={styles.Footer__Copy} size="xs">
        &copy; Masu inc.
      </Text>
    </footer>
  );
}
