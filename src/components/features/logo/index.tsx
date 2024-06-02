import React from 'react';
import styles from './styles.module.scss';
import Link from '@/components/lib/link';
import Text from '@/components/lib/text';
import LogoIcon from '@/static/icons/logo.svg';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <Link href="/" className={styles.Logo__Link}>
        <div className={styles.Logo__Icon}>
          <LogoIcon width={58} height={58} />
        </div>
        <Text className={styles.Logo__Title} variant="h5" component="h1">
          SKYS
        </Text>
      </Link>
    </div>
  );
}
