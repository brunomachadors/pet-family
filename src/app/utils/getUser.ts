import { fetchToken } from './getToken';

export async function getUser(externalId: string) {
  try {
    const token = await fetchToken();

    const response = await fetch(`/api/users/${externalId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar dados do usuário');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    return null;
  }
}
