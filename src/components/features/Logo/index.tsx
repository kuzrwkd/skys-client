import React from 'react';
import styles from './styles.module.css';
import LogoIcon from '@/static/icons/logo.svg';
import Link from 'src/components/lib/Link';
import Text from 'src/components/lib/Text';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.link}>
        <div className={styles.icon}>
          <LogoIcon width={58} height={58} />
        </div>
        <Text className={styles.title} variant="h5" component="h1">
          SKYS
        </Text>
      </Link>
    </div>
  );
}