'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import PetCard from '../PetCard';
import { TPet } from '@/app/types/types';

const PetListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type PetListProps = {
  userId: number;
};

const PetList: React.FC<PetListProps> = ({ userId }) => {
  const [pets, setPets] = useState<TPet[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`/api/pets/${userId}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setPets(data);
        } else {
          console.error('Resposta da API não é um array:', data);
          setPets([]);
        }
      } catch (error) {
        console.error('Erro ao buscar pets:', error);
        setPets([]);
      }
    };

    fetchPets();
  }, [userId]);

  const handleCardClick = (pet: TPet) => {
    router.push(`/pages/pet/${pet.pet_id}`);
  };

  return (
    <PetListContainer>
      {pets.map((pet) => (
        <PetCard
          key={pet.pet_id}
          pet={pet}
          onClick={() => handleCardClick(pet)}
        />
      ))}
    </PetListContainer>
  );
};

export default PetList;
