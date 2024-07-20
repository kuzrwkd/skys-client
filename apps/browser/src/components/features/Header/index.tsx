import {SBUButton} from '@skys-client/skys-base-ui';
import {IconUserCircle} from '@tabler/icons-react';
import React from 'react';
import ClientMainNavToggleButton from './client/ClientMainNavToggleButton';
import ClientSubNavToggleButton from './client/ClientSubNavToggleButton';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['left-area']}>
        <div className={styles['main-nav-button-wrapper']}>
          <ClientMainNavToggleButton />
        </div>
      </div>
      <div className={styles['right-area']}>
        <div className={styles['sub-nav-button-wrapper']}>
          <ClientSubNavToggleButton />
        </div>
        <div className={styles['account-button-wrapper']}>
          <SBUButton size="large">
            <IconUserCircle fontSize="inherit" />
          </SBUButton>
        </div>
      </div>
    </header>
  );
}
