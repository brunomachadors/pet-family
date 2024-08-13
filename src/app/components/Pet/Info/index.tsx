import React, { useState } from 'react';
import { PetDetailInfo } from './style';
import { TPet } from '@/app/types/types';
import PetDetailEdit from './InfoEdit';
import PetDetailView from './InfoView';

type PetDetailInfoProps = {
  pet: TPet;
  onUpdatePet: (updatedPet: TPet) => void;
};

const PetDetailInfoComponent: React.FC<PetDetailInfoProps> = ({
  pet,
  onUpdatePet,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedPet: TPet) => {
    onUpdatePet(updatedPet);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <PetDetailInfo>
      {isEditing ? (
        <PetDetailEdit
          pet={pet}
          onUpdatePet={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <PetDetailView pet={pet} onEdit={handleEdit} />
      )}
    </PetDetailInfo>
  );
};

export default PetDetailInfoComponent;
