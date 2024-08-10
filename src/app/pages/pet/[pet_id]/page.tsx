'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container } from './style';
import PetDetail from '@/app/components/Pet/PetDetail';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/app/components/Buttons/style';
import { TPet } from '@/app/types/types';

export default function PetPage() {
  const { pet_id } = useParams();
  const [petData, setPetData] = useState<TPet | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!pet_id) return;

    const fetchPet = async () => {
      try {
        const response = await fetch(`/api/pet/${pet_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: TPet = await response.json();
        setPetData(data);
      } catch (error) {
        console.error('Erro ao buscar os dados do pet:', error);
      }
    };

    fetchPet();
  }, [pet_id]);

  return (
    <Container>
      {petData ? <PetDetail pet={petData} /> : <p>Loading...</p>}

      <BackButton onClick={() => router.push('/pages/mypets')}>
        VOLTAR
      </BackButton>
    </Container>
  );
}
