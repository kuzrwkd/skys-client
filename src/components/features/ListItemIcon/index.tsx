import React from 'react';
import styles from './styles.module.css';
import Link from 'src/components/lib/Link';
import List from 'src/components/lib/List';
import ThemeIcon from 'src/components/lib/ThemeIcon';

type ListItemIconProps = {
  icon: any;
  href: string;
  label: string;
};

export default function ListItemIcon(props: ListItemIconProps) {
  const {icon: Icon, href, label} = props;
  return (
    <List.Item className={styles.listItemIcon}>
      <Link className={styles.link} href={href}>
        <ThemeIcon className={styles.iconWrapper} variant="transparent">
          <Icon />
        </ThemeIcon>
        {label}
      </Link>
    </List.Item>
  );
}
