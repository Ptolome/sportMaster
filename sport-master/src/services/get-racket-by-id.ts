import { BASE_API_URL } from '@constants/servise';
import { IRacket } from '@/src/types/racket';
import { Response } from '@/src/types/request';
import { cookies } from 'next/headers';

export const getRacketById = async (id: string): Response<IRacket> => {
  const cookieStore = await cookies();
  const res = await fetch(`${BASE_API_URL}/product/${id}`, {
    credentials: 'include',
    headers: {
      cookie: cookieStore.toString(),
    },
  });

  if (res.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const { product } = await res.json();
  return { isError: false, data: product };
};
