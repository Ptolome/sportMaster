type CookieOptions = {
  domain?: string;
  path?: string;
  maxAge?: number;
  expires?: Date;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
};

type ParsedCookie = {
  name: string;
  value: string;
  options: CookieOptions;
};

export function parseSetCookie(setCookieHeader: string[]): ParsedCookie[] {
  const cookies: ParsedCookie[] = [];
  for (const raw of setCookieHeader) {
    const pars = raw.split(';').map((s) => s.trim());

    const [name, value] = pars[0].split('=');
    const options: CookieOptions = {};
    for (let i = 1; i < pars.length; i++) {
      const [key, val] = pars[i].split('=');
      const lowerKey = key.toLowerCase();
      switch (lowerKey) {
        case 'domain':
          options.domain = val;
          break;
        case 'path':
          options.path = val;
          break;
        case 'expires':
          options.expires = new Date(val);
          break;
        case 'httponly':
          options.httpOnly = true;
          break;
        case 'secure':
          options.secure = true;
          break;
        case 'samesite':
          if (val) {
            const someSite = val.toLowerCase();
            if (['strict', 'lax', 'none'].includes(someSite)) {
              options.sameSite = someSite as 'strict' | 'lax' | 'none';
            }
          }

          break;
        case 'maxage':
          if (isNaN(Number(val))) {
            options.maxAge = parseInt(val);
          }
          break;
        default:
          break;
      }
    }
    cookies.push({ name, value, options });
  }
  return cookies;
}
