'use client';
import { BASE_API_URL } from '@/src/constants/servise';
import { UserContext } from '@/src/providers/UserProvider';
import { use, useTransition } from 'react';
import styles from './LogoutButton.module.css';

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}auth/logout`, {
    credentials: 'include',
    method: 'DELETE',
  });
  location.assign('/');
};

const LogoutButton = () => {
  const user = use(UserContext);
  const [isPending, startTransition] = useTransition();

  if (!user) {
    return null;
  }

  return (
    <button
      className={styles.button}
      onClick={() => startTransition(handleLogout)}
      disabled={isPending}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
