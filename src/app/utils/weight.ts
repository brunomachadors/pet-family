import { TWeight } from '../types/types';

export async function addWeight(id_pet: number, weight: number): Promise<void> {
  try {
    const response = await fetch(`/api/weight/${id_pet}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weight }), // Não é necessário incluir id_pet no corpo, pois já está na URL
    });

    if (!response.ok) {
      const errorText = await response.text(); // Ler o corpo da resposta de erro
      throw new Error(
        `Erro ao adicionar peso: ${response.statusText}. ${errorText}`
      );
    }
  } catch (error) {
    console.error('Erro ao chamar a API para adicionar peso:', error);
    throw error;
  }
}

export async function getWeight(id_pet: number): Promise<TWeight[]> {
  try {
    const response = await fetch(`/api/weight/${id_pet}`, {
      method: 'GET',
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
