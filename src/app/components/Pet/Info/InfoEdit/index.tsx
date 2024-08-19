import React, { useEffect, useState } from 'react';
import { LineContainer, EditContainer, IconContainer, IconText } from './style';
import { TPet } from '@/app/types/types';
import { BreedSelect, SpeciesSelect } from '@/app/components/Select';
import { BreedNameInput, ColorInput, DobInput } from '@/app/components/Input';
import { SexRadioGroup } from '@/app/components/Radio';
import { getDogBreedNames } from '@/app/utils/breeds';
import { updatePet } from '@/app/utils/pets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type PetDetailEditProps = {
  pet: TPet;
  onUpdatePet: (updatedPet: TPet) => void;
  onCancel: () => void;
};

const PetDetailEdit: React.FC<PetDetailEditProps> = ({
  pet,
  onUpdatePet,
  onCancel,
}) => {
  const [editedPet, setEditedPet] = useState<TPet>(pet);
  const [species, setSpecies] = useState<string>(pet.species || '');
  const [breedOptions, setBreedOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSpeciesChange = (species: string) => {
    setSpecies(species);
    setEditedPet((prev) => ({ ...prev, species }));
  };

  const handleBreedChange = (breed: string) => {
    setEditedPet((prev) => ({ ...prev, breed }));
  };

  const handleColorChange = (color: string) => {
    setEditedPet((prev) => ({ ...prev, color }));
  };

  const handleSexChange = (sex: string) => {
    setEditedPet((prev) => ({ ...prev, sex }));
  };

  const handleDateChange = (dob: string) => {
    setEditedPet((prev) => ({ ...prev, dob }));
  };

  const handleSave = async () => {
    if (pet.pet_id === undefined) {
      setMessage('ID do pet não encontrado.');
      return;
    }

    setLoading(true);
    const {
      success,
      message: responseMessage,
      updatedPet,
    } = await updatePet({
      ...editedPet,
      pet_id: pet.pet_id,
    });

    setLoading(false);
    setMessage(responseMessage);

    if (success && updatedPet) {
      onUpdatePet(updatedPet);
      router.push(`/pages/pet/${pet.pet_id}`);
    }
  };

  useEffect(() => {
    const fetchBreeds = async () => {
      if (species === 'Cachorro') {
        const { success, breedNames } = await getDogBreedNames();
        if (success && breedNames) {
          setBreedOptions(breedNames);
        }
      } else {
        setBreedOptions([]);
      }
    };

    fetchBreeds();
  }, [species]);

  return (
    <EditContainer>
      <LineContainer>
        <SpeciesSelect
          species={editedPet.species || ''}
          onSpeciesChange={handleSpeciesChange}
        />
      </LineContainer>

      <LineContainer>
        {species === 'Cachorro' ? (
          <BreedSelect
            breed={editedPet.breed || ''}
            onBreedChange={handleBreedChange}
            breedOptions={breedOptions}
          />
        ) : (
          <BreedNameInput
            breed={editedPet.breed || ''}
            onBreedChange={handleBreedChange}
          />
        )}
      </LineContainer>

      <LineContainer>
        <ColorInput
          color={editedPet.color || ''}
          onColorChange={handleColorChange}
        />
      </LineContainer>

      <LineContainer>
        <SexRadioGroup
          sex={editedPet.sex || ''}
          onSexChange={handleSexChange}
        />
      </LineContainer>

      <LineContainer>
        <DobInput dob={editedPet.dob || ''} onDobChange={handleDateChange} />
      </LineContainer>

      <IconText>Deseja salvar as alterações?</IconText>

      <IconContainer>
        <Image
          src={
            'https://res.cloudinary.com/dtglidvcw/image/upload/v1723561903/PET%20FAMILTY/buttons/cancelIcon.png'
          }
          width={24}
          height={24}
          alt="cancelIcon"
          onClick={onCancel}
        />
        <Image
          src={
            'https://res.cloudinary.com/dtglidvcw/image/upload/v1723561852/PET%20FAMILTY/buttons/confirmIcon.png'
          }
          width={24}
          height={24}
          alt="confirmIcon"
          onClick={handleSave}
          style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
        />
      </IconContainer>

      {message && <p>{message}</p>}
    </EditContainer>
  );
};

export default PetDetailEdit;
