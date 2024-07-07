import React from 'react';
import styles from './styles.module.scss';
import Link from '@/components/lib/link';
import List from '@/components/lib/list';
import ThemeIcon from '@/components/lib/themeIcon';

type ListItemIconProps = {
  icon: any;
  href: string;
  label: string;
};

export default function ListItemIcon(props: ListItemIconProps) {
  const {icon: Icon, href, label} = props;
  return (
    <List.Item className={styles.ListItemIcon}>
      <Link className={styles.ListItemIcon__Link} href={href}>
        <ThemeIcon
          className={styles.ListItemIcon__IconWrapper}
          variant="transparent"
        >
          <Icon />
        </ThemeIcon>
        {label}
      </Link>
    </List.Item>
  );
}
