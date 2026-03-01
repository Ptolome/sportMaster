'use client';

import { UserContext } from '@/src/providers/UserProvider';
import { use } from 'react';
import LinkActive from '../LinkActive';
import LogoutButton from '../logout-button/LogoutButton';
import styles from './LoginSection.module.css';

const LoginSection = () => {
  const user = use(UserContext);

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <div>Привет, {user.user.login}</div>
          <LogoutButton />
        </>
      ) : (
        <>
          <LinkActive href="/login">Login</LinkActive>
          <LinkActive href="/signup">Signup</LinkActive>
        </>
      )}
    </div>
  );
};

export default LoginSection;
