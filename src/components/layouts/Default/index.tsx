import React from 'react';
import styles from './styles.module.css';
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
