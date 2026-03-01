import { BASE_API_URL } from '../constants/servise';
import { Response } from '@/src/types/request';
import { IUser } from '@/src/types/user';
import { cookies } from 'next/headers';

export const getUser = async (): Response<IUser> => {
  const cookieStore = await cookies();
  const result = await fetch(`${BASE_API_URL}/auth/user`, {
    credentials: 'include',
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  if (result.status === 401) {
    return { isError: false, data: undefined };
  }
  if (!result.ok) {
    return { isError: true, data: undefined };
  }
  const user = await result.json();
  return { isError: false, data: user };
};
