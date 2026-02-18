import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
}
