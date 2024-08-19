import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

import { Form, Button, ErrorMessage, FormContainer } from './style';
import { TPet } from '@/app/types/types';
import { verifyUser } from '@/app/utils/verifyUser';
import { addPet } from '@/app/utils/pets';
import { getDogBreedNames } from '@/app/utils/breeds'; // Importa a função para obter as raças de cachorros
import ConfirmAddModal from '../../Modal/ConfirmAdd';
import AuthGuard from '../../AuthGuard';
import { BreedSelect, SpeciesSelect } from '../../Select';
import {
  BreedNameInput,
  ColorInput,
  DobInput,
  PetNameInput,
} from '../../Input';
import { SexRadioGroup } from '../../Radio';

const AddPetComponent: React.FC = () => {
  const { user } = useUser();
  const [userId, setUserId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [breed, setBreed] = useState('');
  const [species, setSpecies] = useState('');
  const [sex, setSex] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [petId, setPetId] = useState<number | null>(null);
  const [breedOptions, setBreedOptions] = useState<string[]>([]); // Estado para armazenar as opções de raças

  useEffect(() => {
    const initializeUser = async () => {
      if (!user) return;

      try {
        const userData = {
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.emailAddresses[0].emailAddress || '',
          externalId: user.id,
        };

        const verifiedUserId = await verifyUser(userData);

        if (verifiedUserId !== null) {
          setUserId(verifiedUserId);
        } else {
          throw new Error('Erro ao obter o ID do usuário verificado');
        }
      } catch (error) {
        console.error('Erro ao inicializar o usuário:', error);
      }
    };

    initializeUser();
  }, [user]);

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

  const handleSexChange = (value: string) => {
    setSex(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !species || !userId) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setError('');

    const petData: TPet = {
      name,
      dob: dob || undefined,
      breed: breed || undefined,
      species,
      sex,
      color: color || undefined,
      user_id: userId,
    };

    const response = await addPet(petData);

    if (response.success) {
      setSuccess(true);
      setPetId(response.petId ?? null);
      setName('');
      setDob('');
      setBreed('');
      setSpecies('');
      setSex('');
      setColor('');
    } else {
      setError(response.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <AuthGuard>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <PetNameInput name={name} onNameChange={setName} />

          <SpeciesSelect species={species} onSpeciesChange={setSpecies} />
          {species === 'Cachorro' ? (
            <BreedSelect
              breed={breed}
              onBreedChange={setBreed}
              breedOptions={breedOptions}
            />
          ) : (
            <BreedNameInput breed={breed} onBreedChange={setBreed} />
          )}

          <ColorInput color={color} onColorChange={setColor} />
          <DobInput dob={dob} onDobChange={setDob} />
          <SexRadioGroup sex={sex} onSexChange={handleSexChange} />

          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Adicionar Pet</Button>
        </Form>

        {success && petId !== null && <ConfirmAddModal petId={petId} />}
      </FormContainer>
    </AuthGuard>
  );
};

export default AddPetComponent;
