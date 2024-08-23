import { TWeight } from '../types/types';
import { fetchToken } from './token/getToken';

export async function addWeight(pet_id: number, weight: number): Promise<void> {
  try {
    const token = await fetchToken();

    const response = await fetch('/api/weight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ weight, pet_id }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Erro ao adicionar peso: ${response.statusText}. ${errorText}`
      );
    }
  } catch (error) {
    console.error('Erro ao chamar a API para adicionar peso:', error);
    throw error;
  }
}

export async function getWeight(pet_id: number): Promise<TWeight[]> {
  try {
    const token = await fetchToken();

    const response = await fetch(`/api/weight/${pet_id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Erro ao buscar pesos: ${response.statusText}. ${errorText}`
      );
    }

    const data: TWeight[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao chamar a API para buscar pesos:', error);
    throw error;
  }
}

export const calculateWeightDifference = (
  currentWeight: number,
  previousWeight: number
) => {
  return ((currentWeight - previousWeight) / 1000).toFixed(2);
};

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export async function removeWeight(weight_id: number): Promise<void> {
  try {
    const token = await fetchToken();

    const response = await fetch(`/api/weight/${weight_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Erro ao remover peso: ${response.statusText}. ${errorText}`
      );
    }
  } catch (error) {
    console.error('Erro ao chamar a API para remover peso:', error);
    throw error;
  }
}
