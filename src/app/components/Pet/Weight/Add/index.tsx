import React, { useState } from 'react';
import {
  AddPetWeightContainer,
  InputWrapper,
  AddPetWeightInput,
  Kilo,
} from './style';
import { AddWeightButton } from '@/app/components/Buttons/style';

interface AddPetWeightProps {
  pet_id: number;
  onSave: (pet_id: number, weight: string) => Promise<void>; // Adiciona a propriedade onSave
}

const AddPetWeight: React.FC<AddPetWeightProps> = ({ pet_id, onSave }) => {
  const [weight, setWeight] = useState('');

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/[^0-9]/g, '');
    if (input.length > 4) {
      input = input.slice(0, 4);
    }
    const formattedWeight =
      input.length > 1 ? `${input.slice(0, -1)},${input.slice(-1)}` : input;
    setWeight(formattedWeight);
  };

  const handleSave = async () => {
    if (!weight) {
      alert('Por favor, insira um valor de peso.');
      return;
    }

    try {
      await onSave(pet_id, weight); // Usa a propriedade onSave
      setWeight('');
    } catch (error) {
      console.error('Erro ao salvar peso:', error);
      alert('Erro ao salvar o peso. Tente novamente.');
    }
  };

  return (
    <AddPetWeightContainer>
      <InputWrapper>
        <AddPetWeightInput
          value={weight}
          onChange={handleWeightChange}
          placeholder="0,0"
        />
        <Kilo>kg</Kilo>
      </InputWrapper>
      <AddWeightButton onClick={handleSave}>Salvar</AddWeightButton>
    </AddPetWeightContainer>
  );
};

export default AddPetWeight;
