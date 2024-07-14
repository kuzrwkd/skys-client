import React from 'react';
import styles from './styles.module.css';
import Link from '@/components/features/Link';
import Typography from '@/components/features/Typography';
import LogoIcon from '@/static/icons/logo.svg';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.link}>
        <div className={styles.icon}>
          <LogoIcon width={58} height={58} />
        </div>
        <Typography className={styles.title} variant="h5" component="h1">
          SKYS
        </Typography>
      </Link>
    </div>
  );
}
