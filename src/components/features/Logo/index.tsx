import React from 'react';
import styles from './styles.module.css';
import LibLink from '@/components/lib/Link';
import LibText from '@/components/lib/Text';
import LogoIcon from '@/static/icons/logo.svg';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <LibLink href="/" className={styles.link}>
        <div className={styles.icon}>
          <LogoIcon width={58} height={58} />
        </div>
        <LibText className={styles.title} variant="h5" component="h1">
          SKYS
        </LibText>
      </LibLink>
    </div>
  );
}
