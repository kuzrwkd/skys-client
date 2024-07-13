'use client';

import {IconNews} from '@tabler/icons-react';
import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import ListItemIcon from '@/components/features/ListItemIcon';
import Logo from '@/components/features/Logo';
import LibActionIcon from '@/components/lib/ActionIcon';
import LibLink from '@/components/lib/Link';
import LibList from '@/components/lib/List';
import {useAppSelector} from '@/redux/hooks';

export const mainMenu = [
  {
    label: 'ニュース',
    href: '/newsfeed',
    icon: IconNews,
  },
] as const;

type MainMenuItems = (typeof mainMenu)[number];

function renderListItem(isMainNavOpen: boolean, items: MainMenuItems) {
  const {href, label, icon: Icon} = items;
  if (!isMainNavOpen) {
    return (
      <LibList.Item key={href}>
        <div className={styles.closeMenuIconWrapper}>
          <LibLink href={href}>
            <LibActionIcon color="primary" variant="transparent">
              <Icon />
            </LibActionIcon>
          </LibLink>
        </div>
      </LibList.Item>
    );
  }
  return <ListItemIcon label={label} href={href} icon={Icon} key={href} />;
}

export default function MainNav() {
  const isMainNavOpen = useAppSelector(
    state => state.layoutReducer.isMainNavOpen,
  );

  const mainNavClassName = classnames({
    [styles.mainNav]: true,
    [styles.open]: isMainNavOpen,
  });

  return (
    <aside className={mainNavClassName}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <LibList listStyleType="none">
        {mainMenu.map(item => renderListItem(isMainNavOpen, {...item}))}
      </LibList>
    </aside>
  );
}
