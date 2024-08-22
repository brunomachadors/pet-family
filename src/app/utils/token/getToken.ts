import { parse, serialize } from 'cookie';

export function setTokenCookie(token: string) {
  document.cookie = serialize('authToken', token, {
    maxAge: 3600,
    path: '/',
    secure: process.env.NODE_ENV === 'development',
    httpOnly: false,
    sameSite: 'strict',
  });
}

export function getTokenCookie(): string | null {
  const { authToken } = parse(document.cookie);

  return authToken || null;
}

export async function fetchToken(): Promise<string> {
  const token = getTokenCookie();

  if (token) {
    return token;
  }

  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching token: ${response.statusText}`);
    }

    const { token: fetchedToken } = await response.json();

    if (fetchedToken) {
      setTokenCookie(fetchedToken);
    }

    return fetchedToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
