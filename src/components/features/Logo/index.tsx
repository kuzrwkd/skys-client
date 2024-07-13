import React from 'react';
import styles from './styles.module.scss';
import LogoIcon from '@/static/icons/logo.svg';
import Link from 'src/components/lib/Link';
import Text from 'src/components/lib/Text';

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
