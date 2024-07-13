'use client';

import {IconNews} from '@tabler/icons-react';
import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import {useAppSelector} from '@/redux/hooks';
import ListItemIcon from 'src/components/features/ListItemIcon';
import Logo from 'src/components/features/Logo';
import ActionIcon from 'src/components/lib/ActionIcon';
import Link from 'src/components/lib/Link';
import List from 'src/components/lib/List';

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
      <List.Item key={href}>
        <div className={styles.MainNav__CloseMenuIconWrapper}>
          <Link href={href}>
            <ActionIcon color="primary" variant="transparent">
              <Icon />
            </ActionIcon>
          </Link>
        </div>
      </List.Item>
    );
  }
  return <ListItemIcon label={label} href={href} icon={Icon} key={href} />;
}

export default function MainNav() {
  const isMainNavOpen = useAppSelector(
    state => state.layoutReducer.isMainNavOpen,
  );

  const mainNavClassName = classnames({
    [styles.MainNav]: true,
    [styles['MainNav--Open']]: isMainNavOpen,
  });

  return (
    <aside className={mainNavClassName}>
      <div className={styles.MainNav__LogoWrapper}>
        <Logo />
      </div>
      <List listStyleType="none">
        {mainMenu.map(item => renderListItem(isMainNavOpen, {...item}))}
      </List>
    </aside>
  );
}
