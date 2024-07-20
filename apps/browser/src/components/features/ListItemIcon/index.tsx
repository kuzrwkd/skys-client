import {SBUList, SBUThemeIcon} from '@skys-client/skys-base-ui';
import React from 'react';
import styles from './styles.module.css';
import Link from '@/components/features/Link';

type ListItemIconProps = {
  icon: any;
  href: string;
  label: string;
};

export default function ListItemIcon(props: ListItemIconProps) {
  const {icon: Icon, href, label} = props;
  return (
    <SBUList.Item className={styles['list-item-icon']}>
      <Link className={styles.link} href={href}>
        <SBUThemeIcon className={styles['icon-wrapper']} variant="transparent">
          <Icon />
        </SBUThemeIcon>
        {label}
      </Link>
    </SBUList.Item>
  );
}
