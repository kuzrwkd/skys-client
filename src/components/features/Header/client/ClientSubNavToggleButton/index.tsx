'use client';

import React from 'react';
import SBUButton from '@/packages/skys-base-ui/SBUButton';
import {toggleSubNav} from '@/redux/features/layoutSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import MenuRightIcon from '@/static/icons/menuRight.svg';

export default function ClientMainNavToggleButton() {
  const isSubNavOpen = useAppSelector(
    state => state.layoutReducer.isSubNavOpen,
  );
  const dispatch = useAppDispatch();

  const toggleSubNavHandler = () => {
    dispatch(toggleSubNav(!isSubNavOpen));
  };

  return (
    <SBUButton
      leftSection={<MenuRightIcon width={24} height={24} />}
      variant="default"
      onClick={toggleSubNavHandler}
    />
  );
}
