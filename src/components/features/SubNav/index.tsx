import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export default function SubNav() {
  const subNavClassName = classnames({
    [styles.root]: true,
    [styles['root--open']]: false,
  });

  return <aside className={subNavClassName} />;
}
