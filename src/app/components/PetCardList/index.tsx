// src/components/PetList/PetList.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PetCard from '../PetCard';
import { PetType } from '@/app/utils/types';

const PetListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type PetListProps = {
  userId: number;
};

const PetList: React.FC<PetListProps> = ({ userId }) => {
  const [pets, setPets] = useState<PetType[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`/api/pets/${userId}`);
        const data = await response.json();

        // Verifique se `data` é um array
        if (Array.isArray(data)) {
          setPets(data);
        } else {
          console.error('Resposta da API não é um array:', data);
          setPets([]);
        }
      } catch (error) {
        console.error('Erro ao buscar pets:', error);
        setPets([]); // Inicializa como um array vazio em caso de erro
      }
    };

    fetchPets();
  }, [userId]);

  const handleCardClick = (pet: PetType) => {
    console.log('Pet clicado:', pet);
  };

  return (
    <PetListContainer>
      {pets.map((pet) => (
        <PetCard key={pet.id_pet} pet={pet} onClick={handleCardClick} />
      ))}
    </PetListContainer>
  );
};

export default PetList;
