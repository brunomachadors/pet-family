import { TPet } from '../types/types';

export async function addPet(
  petData: TPet
): Promise<{ success: boolean; message: string; petId?: number }> {
  try {
    const response = await fetch('/api/pet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Pet adicionado com sucesso!',
        petId: result.pet_id,
      };
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

export async function updatePet(
  petData: Partial<TPet> & { pet_id: number }
): Promise<{ success: boolean; message: string; updatedPet?: TPet }> {
  try {
    const response = await fetch('/api/pet', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Pet atualizado com sucesso!',
        updatedPet: result,
      };
    } else {
      return {
        success: false,
        message: result.error || 'Ocorreu um erro ao atualizar o pet.',
      };
    }
  } catch (error) {
    console.error('Erro ao se conectar com o servidor:', error);
    return { success: false, message: 'Erro ao se conectar com o servidor.' };
  }
}

export async function removePet(
  pet_id: number
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/pet', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pet_id }),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: 'Pet removido com sucesso!' };
    } else {
      return {
        success: false,
        message: result.error || 'Ocorreu um erro ao remover o pet.',
      };
    }
  } catch (error) {
    console.error('Erro ao se conectar com o servidor:', error);
    return { success: false, message: 'Erro ao se conectar com o servidor.' };
  }
}

export async function getPetsByUserId(userId: number): Promise<TPet[]> {
  try {
    const response = await fetch(`/api/pets/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar pets');
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('Resposta da API não é um array:', data);
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    return [];
  }
}
