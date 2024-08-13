import React from 'react';
import { Label, Input } from './style'; // Importe os componentes estilizados

type PetNameInputProps = {
  name: string;
  onNameChange: (name: string) => void;
};

type BreedNameInputProps = {
  breed: string;
  onBreedChange: (breed: string) => void;
};

type ColorInputProps = {
  color: string;
  onColorChange: (color: string) => void;
};

export const PetNameInput: React.FC<PetNameInputProps> = ({
  name,
  onNameChange,
}) => {
  return (
    <>
      <Label>Nome do Pet</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        required
        fullWidth
        placeholder="Ex: Batata"
      />
    </>
  );
};

export const BreedNameInput: React.FC<BreedNameInputProps> = ({
  breed,
  onBreedChange,
}) => {
  return (
    <>
      <Label>Raça (Opcional)</Label>
      <Input
        type="text"
        value={breed}
        onChange={(e) => onBreedChange(e.target.value)}
        placeholder="Ex: Viralata"
      />
    </>
  );
};

export const ColorInput: React.FC<ColorInputProps> = ({
  color,
  onColorChange,
}) => {
  return (
    <>
      <Label>Cor</Label>
      <Input
        type="text"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
        placeholder="Ex: Marrom"
      />
    </>
  );
};

type DobInputProps = {
  dob: string;
  onDobChange: (dob: string) => void;
};

export const DobInput: React.FC<DobInputProps> = ({ dob, onDobChange }) => {
  return (
    <>
      <Label>Data de Nascimento</Label>
      <Input
        type="date"
        value={dob}
        onChange={(e) => onDobChange(e.target.value)}
      />
    </>
  );
};
