'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Importa o hook useRouter
import {
  Form,
  Label,
  Input,
  Select,
  RadioContainer,
  RadioLabel,
  Radio,
  Button,
  ErrorMessage,
} from './style';
import { TPet } from '@/app/types/types';
import { verifyUser } from '@/app/utils/verifyUser';
import { addPet } from '@/app/utils/pets';
import ConfirmAddModal from '../../Modal/ConfirmAdd';

const AddPetComponent: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
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
      id_user: userId,
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

  const handleCloseModal = () => {
    setSuccess(false);
    setPetId(null);
  };

  const handleGoToMyPets = () => {
    router.push('/pages/mypets');
  };

  const handleGoToPetDetails = () => {
    if (petId) {
      router.push(`/pages/pet/${petId}`);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>Nome do Pet</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Label>Data de Nascimento</Label>
        <Input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <Label>Raça (Opcional)</Label>
        <Input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <Label>Espécie</Label>
        <Select
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        >
          <option value="">Selecione a espécie</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
          <option value="Pássaro">Pássaro</option>
          <option value="Peixe">Peixe</option>
          <option value="Hamster">Hamster</option>
          <option value="Coelho">Coelho</option>
          {/* Adicione mais espécies conforme necessário */}
        </Select>

        <Label>Sexo</Label>
        <RadioContainer>
          <RadioLabel>
            <Radio
              type="radio"
              name="sex"
              value="M"
              checked={sex === 'M'}
              onChange={() => handleSexChange('M')}
            />
            Macho
          </RadioLabel>
          <RadioLabel>
            <Radio
              type="radio"
              name="sex"
              value="F"
              checked={sex === 'F'}
              onChange={() => handleSexChange('F')}
            />
            Fêmea
          </RadioLabel>
        </RadioContainer>

        <Label>Cor</Label>
        <Input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Adicionar Pet</Button>
      </Form>

      {success && petId !== null && <ConfirmAddModal petId={petId} />}
    </>
  );
};

export default AddPetComponent;
