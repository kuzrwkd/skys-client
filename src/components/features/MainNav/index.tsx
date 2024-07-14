'use client';

import {IconNews} from '@tabler/icons-react';
import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import Link from '@/components/features/Link';
import ListItemIcon from '@/components/features/ListItemIcon';
import Logo from '@/components/features/Logo';
import SBUActionIcon from '@/packages/skys-base-ui/SBUActionIcon';
import SBUList from '@/packages/skys-base-ui/SBUList';
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
      <SBUList.Item key={href}>
        <div className={styles.closeMenuIconWrapper}>
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
    [styles.mainNav]: true,
    [styles.open]: isMainNavOpen,
  });

  return (
    <aside className={mainNavClassName}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <SBUList listStyleType="none">
        {mainMenu.map(item => renderListItem(isMainNavOpen, item))}
      </SBUList>
    </aside>
  );
}
