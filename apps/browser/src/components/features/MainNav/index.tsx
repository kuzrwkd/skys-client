'use client';

import {SBUActionIcon, SBUList} from '@skys-client/skys-base-ui';
import {IconNews} from '@tabler/icons-react';
import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import Link from '@/components/features/Link';
import ListItemIcon from '@/components/features/ListItemIcon';
import Logo from '@/components/features/Logo';
import {useAppSelector} from '@/redux/hooks';

export const mainMenu = [
  {
    label: 'ニュース',
    href: '/newsfeed',
    icon: IconNews,
  },
] as const;

type MainMenuItems = (typeof mainMenu)[number];

type MenuItemProps = {
  isMainNavOpen: boolean;
  item: MainMenuItems;
};

function MenuItem({isMainNavOpen, item}: MenuItemProps) {
  const {href, label, icon: Icon} = item;
  if (!isMainNavOpen) {
    return (
      <SBUList.Item key={href}>
        <div className={styles['close-menu-icon-wrapper']}>
          <Link href={href}>
            <SBUActionIcon color="primary" variant="transparent">
              <Icon />
            </SBUActionIcon>
          </Link>
        </div>
      </SBUList.Item>
    );
  }
  return <ListItemIcon label={label} href={href} icon={Icon} key={href} />;
}

export default function MainNav() {
  const isMainNavOpen = useAppSelector(
    state => state.layoutReducer.isMainNavOpen,
  );

  const mainNavClassName = classnames({
    [styles['main-nav']]: true,
    [styles.open]: isMainNavOpen,
  });

  return (
    <aside className={mainNavClassName}>
      <div className={styles['logo-wrapper']}>
        <Logo />
      </div>
      <SBUList listStyleType="none">
        {mainMenu.map(item => (
          <MenuItem isMainNavOpen={isMainNavOpen} item={item} />
        ))}
      </SBUList>
    </aside>
  );
}
