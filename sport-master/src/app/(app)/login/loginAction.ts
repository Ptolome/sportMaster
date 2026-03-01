'use server';

import { BASE_API_URL } from '@/src/constants/servise';
import { cookies } from 'next/headers';
import { parseSetCookie } from '@helpers/parse-set-Cookie';

export async function loginAction(state, formData: FormData) {
  const login = formData.get('login')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';
  const res = await fetch(`${BASE_API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ login, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status !== 200) {
    return {
      error: 'Неправильный логин или пароль',
    };
  }
  const cookieStore = await cookies();
  const setCookieHeaders = res.headers.getSetCookie();

  if (setCookieHeaders) {
    const parsed = parseSetCookie(setCookieHeaders);
    for (const cookie of parsed) {
      cookieStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: '', redirectTo: '/' };
}
