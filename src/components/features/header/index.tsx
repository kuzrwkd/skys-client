'use client';

import {IconUserCircle} from '@tabler/icons-react';
import React from 'react';
import styles from './styles.module.scss';
import Button from '@/components/lib/button';
import {toggleMainNav, toggleSubNav} from '@/redux/features/layoutSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import MenuLeftIcon from '@/static/icons/menuLeft.svg';
import MenuRightIcon from '@/static/icons/menuRight.svg';

export default function Header() {
  const {isMainNavOpen, isSubNavOpen} = useAppSelector(state => state.layoutReducer);
  const dispatch = useAppDispatch();

  const toggleSubNavHandler = () => {
    dispatch(toggleSubNav(!isSubNavOpen));
  };

  const toggleMainNavHandler = () => {
    dispatch(toggleMainNav(!isMainNavOpen));
  };

  return (
    <header className={styles.Header}>
      <div className={styles.Header__LeftArea}>
        <Button
          leftSection={<MenuLeftIcon width={24} height={24} />}
          variant="default"
          className={styles['Header__LeftArea-MainNavButton']}
          onClick={toggleMainNavHandler}
        />
      </div>
      <div className={styles.Header__RightArea}>
        <div className={styles['Header__RightArea-SubNavButtonWrapper']}>
          <Button
            leftSection={<MenuRightIcon width={24} height={24} />}
            className={styles['Header__RightArea-SubNavButton']}
            onClick={toggleSubNavHandler}
          />
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
