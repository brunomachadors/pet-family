import { User } from '@/app/utils/types';

export async function createUser(user: User) {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        externalId: user.id,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar usuário');
    }

    const data = await response.json();
    console.log('Usuário criado com sucesso:', data);
    return data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return null;
  }
}
