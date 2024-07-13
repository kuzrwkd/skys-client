import React from 'react';
import styles from './styles.module.css';
import LibLink from '@/components/lib/Link';
import LibList from '@/components/lib/List';
import LibThemeIcon from '@/components/lib/ThemeIcon';

type ListItemIconProps = {
  icon: any;
  href: string;
  label: string;
};

export default function ListItemIcon(props: ListItemIconProps) {
  const {icon: Icon, href, label} = props;
  return (
    <LibList.Item className={styles.listItemIcon}>
      <LibLink className={styles.link} href={href}>
        <LibThemeIcon className={styles.iconWrapper} variant="transparent">
          <Icon />
        </LibThemeIcon>
        {label}
      </LibLink>
    </LibList.Item>
  );
}
