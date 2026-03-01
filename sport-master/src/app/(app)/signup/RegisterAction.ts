'use server';

import { BASE_API_URL } from '@/src/constants/servise';
import { cookies } from 'next/headers';
import { parseSetCookie } from '@helpers/parse-set-Cookie';

interface RegisterState {
  error: string;
  redirectTo?: string;
}

export async function registerAction(
  state: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const login = formData.get('login')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';
  const confirmPassword = formData.get('confirmPassword')?.toString() ?? '';

  if (!login || !password || !confirmPassword) {
    return {
      error: 'Все обязательные поля должны быть заполнены',
    };
  }

  if (password !== confirmPassword) {
    return {
      error: 'Пароли не совпадают',
    };
  }

  if (password.length < 6) {
    return {
      error: 'Пароль должен содержать минимум 6 символов',
    };
  }

  const res = await fetch(`${BASE_API_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  if (data?.error) {
    return {
      error: data.error,
    };
  }

  if (res.status !== 200 && res.status !== 201) {
    return {
      error: data?.message || 'Ошибка при регистрации. Попробуйте позже.',
    };
  }

  const setCookieHeaders = res.headers.getSetCookie();
  if (setCookieHeaders.length > 0) {
    const cookieStore = await cookies();
    const parsed = parseSetCookie(setCookieHeaders);
    for (const cookie of parsed) {
      cookieStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return {
    error: '',
    redirectTo: '/',
  };
}
