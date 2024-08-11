'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './style';
import { RedirectButton } from '../../Buttons/style';

interface ModalProps {
  petId: number;
}

const ConfirmAddModal: React.FC<ModalProps> = ({ petId }) => {
  const router = useRouter();

  const handleGoToMyPets = () => {
    router.push('/pages/mypets');
  };

  const handleGoToPet = () => {
    router.push(`/pages/pet/${petId}`);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Pet Adicionado com Sucesso!</ModalHeader>
        <ModalBody>
          <p>O que você gostaria de fazer agora?</p>
        </ModalBody>
        <ModalFooter>
          <RedirectButton onClick={handleGoToMyPets}>Meus Pets</RedirectButton>
          <RedirectButton onClick={handleGoToPet}>Ver Pet</RedirectButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmAddModal;
