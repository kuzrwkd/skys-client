import {IconUserCircle} from '@tabler/icons-react';
import React from 'react';
import MainNavToggleButton from './mainNavToggleButton';
import styles from './styles.module.scss';
import SubNavToggleButton from './subNavToggleButton';
import Button from '@/components/lib/button';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__LeftArea}>
        <div className={styles['Header__LeftArea-MainNavButtonWrapper']}>
          <MainNavToggleButton />
        </div>
      </div>
      <div className={styles.Header__RightArea}>
        <div className={styles['Header__RightArea-SubNavButtonWrapper']}>
          <SubNavToggleButton />
        </div>
        <div className={styles['Header__RightArea-AccountButtonWrapper']}>
          <Button size="large">
            <IconUserCircle fontSize="inherit" />
          </Button>
        </div>
      </div>
    </header>
  );
}
