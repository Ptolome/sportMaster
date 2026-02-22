import { BASE_API_URL } from '@constants/servise';
import { IRacket } from '@/src/types/racket';
import { Response } from '@/src/types/request';

export const getMetaRacketById = async (id: string): Response<IRacket> => {
  const res = await fetch(`${BASE_API_URL}/meta/product/${id}`);

  if (res.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const { product } = await res.json();
  return { isError: false, data: product };
};
