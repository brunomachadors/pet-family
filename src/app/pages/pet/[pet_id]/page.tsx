'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Para obter os parâmetros da URL
import { Container } from './style';
import PetDetail from '@/app/components/Pet/PetDetail';
import { PetType } from '@/app/utils/types';
import { useRouter } from 'next/navigation'; // Corrigido para usar o hook correto do Next.js
import { BackButton } from '@/app/components/Buttons/style'; // Importe o botão estilizado

export default function PetPage() {
  const { pet_id } = useParams(); // Obtém o parâmetro da URL
  const [petData, setPetData] = useState<PetType | null>(null);
  const router = useRouter(); // Inicializa useRouter

  useEffect(() => {
    if (!pet_id) return; // Não faz nada se pet_id não estiver disponível

    const fetchPet = async () => {
      try {
        const response = await fetch(`/api/pet/${pet_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: PetType = await response.json();
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
