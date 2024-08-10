import { PetType } from '../types/types';

export async function addPet(
  petData: PetType
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: 'Pet adicionado com sucesso!' };
    } else {
      return {
        success: false,
        message: result.error || 'Ocorreu um erro ao adicionar o pet.',
      };
    }
  } catch (error) {
    console.error('Erro ao se conectar com o servidor:', error);
    return { success: false, message: 'Erro ao se conectar com o servidor.' };
  }
}
