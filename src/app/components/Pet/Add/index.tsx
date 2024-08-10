'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Importa o hook useRouter
import {
  Form,
  Label,
  Input,
  Select,
  Button,
  ErrorMessage,
  SuccessMessage,
} from './style';
import { TPet } from '@/app/types/types';
import { verifyUser } from '@/app/utils/verifyUser';
import { addPet } from '@/app/utils/pets';

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
  const [success, setSuccess] = useState('');

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
      sex: sex || undefined,
      color: color || undefined,
      id_user: userId,
    };

    const { success, message } = await addPet(petData);

    if (success) {
      setSuccess(message);
      setName('');
      setDob('');
      setBreed('');
      setSpecies('');
      setSex('');
      setColor('');

      setTimeout(() => {
        router.push('/pages/mypets');
      }, 2000);
    } else {
      setError(message);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Nome do Pet</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Label>Data de Nascimento</Label>
      <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

      <Label>Raça (Opcional)</Label>
      <Input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />

      <Label>Espécie</Label>
      <Input
        type="text"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        required
      />

      <Label>Sexo</Label>
      <Select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option value="">Selecione o sexo</option>
        <option value="M">Macho</option>
        <option value="F">Fêmea</option>
      </Select>

      <Label>Cor</Label>
      <Input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      <Button type="submit">Adicionar Pet</Button>
    </Form>
  );
};

export default AddPetComponent;
