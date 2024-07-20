import classnames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export default function SubNav() {
  const subNavClassName = classnames({
    [styles['sub-nav']]: true,
    [styles.open]: false,
  });

  return <aside className={subNavClassName} />;
}
