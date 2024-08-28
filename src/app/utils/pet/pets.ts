import { TPet } from '@/app/types/types';
import { getPetsByUserId } from '@/app/utils/pets';

export const verifyPet = async (
  userId: number,
  petId: number
): Promise<boolean> => {
  const petData = await getPetsByUserId(userId);
  return petData.some((p: TPet) => p.pet_id === petId);
};
