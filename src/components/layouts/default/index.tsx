import React from 'react';
import styles from './styles.module.scss';
import Footer from '@/components/features/footer';
import Header from '@/components/features/header';
import ManinNav from '@/components/features/mainNav';
import SubNav from '@/components/features/subNav';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const {children} = props;

  return (
    <div className={styles.AppRoot}>
      <div className={styles.AppRoot__Inner}>
        <ManinNav />
        <div className={styles.AppRoot__ContentsWrapper}>
          <Header />
          <main className={styles.AppRoot__Main}>
            <div className={styles.AppRoot__Contents}>{children}</div>
            <SubNav />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
