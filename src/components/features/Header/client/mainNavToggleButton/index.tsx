'use client';

import React from 'react';
import {toggleMainNav} from '@/redux/features/layoutSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import MenuLeftIcon from '@/static/icons/menuLeft.svg';
import Button from 'src/components/lib/Button';

export default function MainNavToggleButton() {
  const isMainNavOpen = useAppSelector(
    state => state.layoutReducer.isMainNavOpen,
  );
  const dispatch = useAppDispatch();

  const toggleMainNavHandler = () => {
    dispatch(toggleMainNav(!isMainNavOpen));
  };

  return (
    <Button
      leftSection={<MenuLeftIcon width={24} height={24} />}
      variant="default"
      onClick={toggleMainNavHandler}
    />
  );
}
