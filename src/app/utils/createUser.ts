import { User } from '@/app/types/types';

export async function createUser(userData: User): Promise<number | null> {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar usuário');
    }

    const createdUser = await response.json();
    return createdUser.id_user;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return null;
  }
}
