import { UserProvider } from '@/src/providers/UserProvider';
import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';
import { getUser } from '@/src/services/get-user';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getUser();
  return (
    <UserProvider user={data}>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </div>
    </UserProvider>
  );
}
