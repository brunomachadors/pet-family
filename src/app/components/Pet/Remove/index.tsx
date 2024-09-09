'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RemoveButtonContainer, RemoveIcon } from './style';
import { removePet } from '@/app/utils/pets';
import ConfirmRemoveModal from '../../Modal/ConfirmRemoval';

interface RemovePetButtonProps {
  petId: number;
}

export default function RemovePetButton({ petId }: RemovePetButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const router = useRouter();

  const handleRemoveClick = () => {
    setIsConfirming(true);
  };

  const confirmRemove = async () => {
    const response = await removePet(petId);
    if (response.success) {
      router.push('/pages/mypets');
    } else {
      alert('Erro ao remover o pet: ' + response.message);
      setIsConfirming(false);
    }
  };

  const closeModal = () => {
    setIsConfirming(false);
  };

  return (
    <>
      <RemoveButtonContainer>
        <RemoveIcon
          src="https://res.cloudinary.com/dtglidvcw/image/upload/v1723307089/PET%20FAMILTY/removeButton.png"
          alt="Remover Pet"
          onClick={handleRemoveClick}
        />
      </RemoveButtonContainer>
      <ConfirmRemoveModal
        $isOpen={isConfirming}
        onClose={closeModal}
        onConfirm={confirmRemove}
      />
    </>
  );
}
