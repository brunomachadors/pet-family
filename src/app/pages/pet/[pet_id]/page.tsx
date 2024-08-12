'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Container } from './style';
import PetDetail from '@/app/components/Pet/PetDetail';
import { BackButton } from '@/app/components/Buttons/style';
import { TPet } from '@/app/types/types';
import RemovePetButton from '@/app/components/Pet/Remove';
import AuthGuard from '@/app/components/AuthGuard';

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
    <AuthGuard>
      <Container>
        {petData ? <PetDetail pet={petData} /> : <p>Loading...</p>}

        <RemovePetButton petId={parseInt(pet_id as string, 10)} />

        <BackButton onClick={() => router.push('/pages/mypets')}>
          VOLTAR
        </BackButton>
      </Container>
    </AuthGuard>
  );
}
