'use client';

import { useActionState, useEffect } from 'react';
import { registerAction } from './RegisterAction';
import styles from './Register.module.css';
import Link from 'next/link';
import LinkActive from '@/src/components/LinkActive';

const Register = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState(
    registerAction,
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
      <h2 className={styles.title}>Signup</h2>

      <div className={styles.input}>
        <label htmlFor="login">Логин *</label>
        <input type="text" name="login" required minLength={3} />
      </div>

      <div className={styles.input}>
        <label htmlFor="password">Пароль *</label>
        <input type="password" name="password" required minLength={6} />
      </div>

      <div className={styles.input}>
        <label htmlFor="confirmPassword">Подтверждение пароля *</label>
        <input type="password" name="confirmPassword" required minLength={6} />
      </div>

      <div className={styles.error}>{error}</div>

      <button disabled={isPending} className={styles.button}>
        {isPending ? 'Regisring...' : 'Signup'}
      </button>

      <p className={styles.link}>
        Уже есть аккаунт? <LinkActive href="/login">Login</LinkActive>
      </p>
    </form>
  );
};

export default Register;
