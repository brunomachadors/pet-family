'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PetCard from '../PetCard';
import { TPet } from '@/app/types/types';
import { getPetsByUserId } from '@/app/utils/pets';
import { Container } from './style';

type PetListProps = {
  userId: number;
};

const PetList: React.FC<PetListProps> = ({ userId }) => {
  const [pets, setPets] = useState<TPet[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPets = async () => {
      const petsData = await getPetsByUserId(userId);
      setPets(petsData);
    };

    fetchPets();
  }, [userId]);

  const handleCardClick = (pet: TPet) => {
    router.push(`/pages/pet/${pet.pet_id}`);
  };

  return (
    <Container>
      {pets.map((pet) => (
        <PetCard
          key={pet.pet_id}
          pet={pet}
          onClick={() => handleCardClick(pet)}
        />
      ))}
    </Container>
  );
};

export default PetList;
