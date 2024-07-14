import {IconUserCircle} from '@tabler/icons-react';
import React from 'react';
import ClientMainNavToggleButton from './client/ClientMainNavToggleButton';
import ClientSubNavToggleButton from './client/ClientSubNavToggleButton';
import styles from './styles.module.css';
import SBUButton from '@/packages/skys-base-ui/SBUButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftArea}>
        <div className={styles.mainNavButtonWrapper}>
          <ClientMainNavToggleButton />
        </div>
      </div>
      <div className={styles.rightArea}>
        <div className={styles.subNavButtonWrapper}>
          <ClientSubNavToggleButton />
        </div>
        <div className={styles.accountButtonWrapper}>
          <SBUButton size="large">
            <IconUserCircle fontSize="inherit" />
          </SBUButton>
        </div>
      </div>
    </header>
  );
}
