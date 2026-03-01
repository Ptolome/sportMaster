'use client';

import { useActionState, useEffect } from 'react';
import { loginAction } from './loginAction';
import styles from './Login.module.css';
import LinkActive from '@/src/components/LinkActive';

const Login = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState(
    loginAction,
    {
      error: '',
      redirectTo: undefined,
    }
  );

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction} className={styles.container}>
      <h2 className={styles.title}>login</h2>
      <div className={styles.input}>
        <label htmlFor="login">login </label>
        <input type="text" name="login" />
      </div>
      <div className={styles.input}>
        <label htmlFor="password">password </label>
        <input type="password" required name="password" />
      </div>
      <div className={styles.error}>{error}</div>
      <button disabled={isPending} className={styles.button}>
        login
      </button>
      <p className={styles.link}>
        нет аккаунта? <LinkActive href="/signup">Signup</LinkActive>
      </p>
    </form>
  );
};
export default Login;
