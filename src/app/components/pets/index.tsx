'use client';

import { PetType } from '@/app/api/pets/route';
import React, { useEffect, useState } from 'react';

export const Pets: React.FC = () => {
  const [petTypes, setPetTypes] = useState<PetType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPetTypes = async () => {
      try {
        const response = await fetch('/api/pets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: PetType[] = await response.json();
        setPetTypes(data);
      } catch (error) {
        setError('Failed to fetch pet types');
        console.error('Error fetching pet types:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetTypes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Tipos de Pets</h1>
      {petTypes.length === 0 ? (
        <p>Nenhum tipo de pet encontrado.</p>
      ) : (
        <ul>
          {petTypes.map((pet) => (
            <li key={pet.id}>
              <h2>{pet.name}</h2>
              <p>{pet.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
