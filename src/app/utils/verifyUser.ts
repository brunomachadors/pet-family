import { getUser } from '@/app/utils/getUser';
import { createUser } from '@/app/utils/createUser';
import { User } from '@/app/types/types';

export async function verifyUser(user: User): Promise<number | null> {
  try {
    const existingUser = await getUser(user.externalId);

    if (existingUser && !existingUser.error) {
      // Usuário já existe
      return existingUser.id_user;
    } else {
      // Usuário não existe, vamos criar
      const createdUserId = await createUser(user);
      if (createdUserId !== null) {
        return createdUserId;
      } else {
        throw new Error('Erro ao obter o ID do usuário criado');
      }
    }
  } catch (error) {
    console.error('Erro ao verificar ou criar o usuário:', error);
    return null;
  }
}
