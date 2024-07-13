import {IconUserCircle} from '@tabler/icons-react';
import React from 'react';
import MainNavToggleButton from './client/mainNavToggleButton';
import SubNavToggleButton from './client/subNavToggleButton';
import styles from './styles.module.css';
import Button from 'src/components/lib/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftArea}>
        <div className={styles.mainNavButtonWrapper}>
          <MainNavToggleButton />
        </div>
      </div>
      <div className={styles.rightArea}>
        <div className={styles.subNavButtonWrapper}>
          <SubNavToggleButton />
        </div>
        <div className={styles.accountButtonWrapper}>
          <Button size="large">
            <IconUserCircle fontSize="inherit" />
          </Button>
        </div>
      </div>
    </header>
  );
}
