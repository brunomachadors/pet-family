import { User } from '@/app/types/types';
import { verifyUser } from '../verifyUser';

export const initializeUser = async (user: User): Promise<number | null> => {
  try {
    const verifiedUserId = await verifyUser(user);
    return verifiedUserId;
  } catch (error) {
    console.error('Erro ao inicializar o usuário:', error);
    return null;
  }
};
