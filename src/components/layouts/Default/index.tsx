import React from 'react';
import styles from './styles.module.scss';
import Footer from 'src/components/features/Footer';
import Header from 'src/components/features/Header';
import ManinNav from 'src/components/features/MainNav';
import SubNav from 'src/components/features/SubNav';

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
