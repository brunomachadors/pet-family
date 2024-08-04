'use client';

import React, { useEffect, useState } from 'react';
import { PetType } from '@/app/api/pets/route';
import {
  Container,
  Title,
  PetList,
  PetItem,
  PetName,
  PetDescription,
  ErrorMessage,
  LoadingMessage,
} from './style';

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
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Container>
      <Title>Tipos de Pets</Title>
      {petTypes.length === 0 ? (
        <p>Nenhum tipo de pet encontrado.</p>
      ) : (
        <PetList>
          {petTypes.map((pet) => (
            <PetItem key={pet.id}>
              <PetName>{pet.name}</PetName>
              <PetDescription>{pet.description}</PetDescription>
            </PetItem>
          ))}
        </PetList>
      )}
    </Container>
  );
};
