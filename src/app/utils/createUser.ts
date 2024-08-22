import { User } from '@/app/types/types';
import { fetchToken } from './getToken';

export async function createUser(userData: User): Promise<number | null> {
  try {
    const token = await fetchToken();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar usuário');
    }

    const createdUser = await response.json();
    return createdUser.user_id;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return null;
  }
}
