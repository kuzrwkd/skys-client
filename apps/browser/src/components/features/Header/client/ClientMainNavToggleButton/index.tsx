'use client';

import {SBUButton} from '@skys-client/skys-base-ui';
import React from 'react';
import {toggleMainNav} from '@/redux/features/layoutSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import MenuLeftIcon from '@/static/icons/menuLeft.svg';

export default function ClientMainNavToggleButton() {
  const isMainNavOpen = useAppSelector(
    state => state.layoutReducer.isMainNavOpen,
  );
  const dispatch = useAppDispatch();

  const toggleMainNavHandler = () => {
    dispatch(toggleMainNav(!isMainNavOpen));
  };

  return (
    <SBUButton
      leftSection={<MenuLeftIcon width={24} height={24} />}
      variant="default"
      onClick={toggleMainNavHandler}
    />
  );
}
