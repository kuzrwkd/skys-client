import React from 'react';
import styles from './styles.module.css';
import Link from '@/components/features/Link';
import SBUList from '@/packages/skys-base-ui/SBUList';
import SBUThemeIcon from '@/packages/skys-base-ui/SBUThemeIcon';

type ListItemIconProps = {
  icon: any;
  href: string;
  label: string;
};

export default function ListItemIcon(props: ListItemIconProps) {
  const {icon: Icon, href, label} = props;
  return (
    <SBUList.Item className={styles.listItemIcon}>
      <Link className={styles.link} href={href}>
        <SBUThemeIcon className={styles.iconWrapper} variant="transparent">
          <Icon />
        </SBUThemeIcon>
        {label}
      </Link>
    </SBUList.Item>
  );
}
