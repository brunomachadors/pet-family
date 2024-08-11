// Em src/app/components/Pet/Add.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import { ClickableImage } from './style';

export const AddPetButton: React.FC = () => {
  const router = useRouter();
  const handleAddPetClick = () => {
    router.push('/pages/addpet');
  };

  return (
    <ClickableImage
      src="https://res.cloudinary.com/dtglidvcw/image/upload/v1723333688/PET%20FAMILTY/addpet.png"
      alt="Adicionar Pet"
      width={100}
      height={100}
      priority
      onClick={handleAddPetClick}
    />
  );
};
