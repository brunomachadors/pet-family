import { TDogBreed } from '../types/types';

export async function getDogBreeds(): Promise<{
  success: boolean;
  message: string;
  breeds?: TDogBreed[];
}> {
  try {
    const response = await fetch('/api/breeds/dogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Raças de cães obtidas com sucesso!',
        breeds: result,
      };
    } else {
      return {
        success: false,
        message: result.error || 'Ocorreu um erro ao obter as raças de cães.',
      };
    }
  } catch (error) {
    console.error('Erro ao se conectar com o servidor:', error);
    return { success: false, message: 'Erro ao se conectar com o servidor.' };
  }
}

export async function getDogBreedNames(): Promise<{
  success: boolean;
  message: string;
  breedNames?: string[];
}> {
  try {
    const response = await fetch('/api/breeds/dogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (response.ok) {
      const breedNames: string[] = result.map(
        (breed: { breed_name: string }) => breed.breed_name
      );

      breedNames.sort((a: string, b: string) => a.localeCompare(b));

      return {
        success: true,
        message: 'Nomes das raças de cães obtidos com sucesso!',
        breedNames,
      };
    } else {
      return {
        success: false,
        message:
          result.error ||
          'Ocorreu um erro ao obter os nomes das raças de cães.',
      };
    }
  } catch (error) {
    console.error('Erro ao se conectar com o servidor:', error);
    return { success: false, message: 'Erro ao se conectar com o servidor.' };
  }
}

export async function getDogBreedByName(breedName: string): Promise<{
  success: boolean;
  message: string;
  breed?: TDogBreed;
}> {
  try {
    const response = await fetch(
      `/api/breeds/dogs/${encodeURIComponent(breedName)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await response.json();

    if (response.ok) {
      const { id, breed_name, country_of_origin, size, ...rest }: TDogBreed =
        result.breed;
      const breed: TDogBreed = {
        id,
        breed_name,
        country_of_origin,
        size,
        ...rest,
      };

      return {
        success: true,
        message: 'Raça obtida com sucesso!',
        breed,
      };
    } else {
      return {
        success: false,
        message: result.error || 'Ocorreu um erro ao obter a raça.',
      };
    }
  } catch (error: unknown) {
    console.error('Erro ao se conectar com o servidor:', error);
    return { success: false, message: 'Erro ao se conectar com o servidor.' };
  }
}
