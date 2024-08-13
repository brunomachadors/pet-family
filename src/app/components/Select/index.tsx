import React from 'react';
import { Label, Select } from './style';

type SpeciesSelectProps = {
  species: string;
  onSpeciesChange: (value: string) => void;
};

export const SpeciesSelect: React.FC<SpeciesSelectProps> = ({
  species,
  onSpeciesChange,
}) => {
  return (
    <>
      <Label>Espécie</Label>
      <Select
        value={species}
        onChange={(e) => onSpeciesChange(e.target.value)}
        required
        className="select-placeholder"
      >
        <option value="" disabled>
          Selecione a espécie
        </option>
        <option value="Cachorro">Cachorro</option>
        <option value="Gato">Gato</option>
        <option value="Pássaro">Pássaro</option>
        <option value="Peixe">Peixe</option>
        <option value="Hamster">Hamster</option>
        <option value="Coelho">Coelho</option>
      </Select>
    </>
  );
};

type BreedSelectProps = {
  breed: string;
  onBreedChange: (breed: string) => void;
  breedOptions: string[];
};

export const BreedSelect: React.FC<BreedSelectProps> = ({
  breed,
  onBreedChange,
  breedOptions,
}) => {
  return (
    <>
      <Label>Raça (Opcional)</Label>
      <Select value={breed} onChange={(e) => onBreedChange(e.target.value)}>
        <option value="">Selecione a raça</option>
        {breedOptions.map((breedName) => (
          <option key={breedName} value={breedName}>
            {breedName}
          </option>
        ))}
      </Select>
    </>
  );
};
