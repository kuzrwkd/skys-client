import React from 'react';
import styles from './styles.module.css';
import Footer from '@/components/features/Footer';
import Header from '@/components/features/Header';
import ManinNav from '@/components/features/MainNav';
import SubNav from '@/components/features/SubNav';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const {children} = props;

  return (
    <div className={styles.appRoot}>
      <div className={styles.inner}>
        <ManinNav />
        <div className={styles.contentsWrapper}>
          <Header />
          <main className={styles.main}>
            <div className={styles.contents}>{children}</div>
            <SubNav />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
