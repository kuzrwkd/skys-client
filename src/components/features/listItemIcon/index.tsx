import React from 'react';
import styles from './styles.module.scss';
import Link from '@/components/lib/link';
import List from '@/components/lib/list';
import ThemeIcon from '@/components/lib/themeIcon';

type ListItemWithIconProps = {
  icon: any;
  href: string;
  label: string;
};

export default function ListItemWithIcon(props: ListItemWithIconProps) {
  const {icon: Icon, href, label} = props;
  return (
    <List.Item className={styles.ListItemWithIcon}>
      <Link className={styles.ListItemWithIcon__Link} href={href}>
        <ThemeIcon className={styles.ListItemWithIcon__IconWrapper} variant="transparent">
          <Icon />
        </ThemeIcon>
        {label}
      </Link>
    </List.Item>
  );
}
