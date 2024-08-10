'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Form,
  Label,
  Input,
  Select,
  Button,
  ErrorMessage,
  SuccessMessage,
} from './style';

export type PetType = {
  id_pet?: number;
  name: string;
  dob?: string;
  breed?: string;
  species: string;
  sex?: string;
  color?: string;
  id_user: number;
};

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
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user) return;

        const response = await fetch(`/api/users/${user.id}`);
        const data = await response.json();

        if (data.error) {
          const userData = {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.emailAddresses[0].emailAddress || '',
            externalId: user.id,
          };
          const createdUserResponse = await fetch('/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const createdUser = await createdUserResponse.json();
          setUserId(createdUser.id_user);
        } else {
          setUserId(data.id_user);
        }
      } catch (error) {
        console.error('Erro ao verificar ou criar usuário:', error);
      }
    };

    fetchUser();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !species || !userId) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setError('');

    const petData: PetType = {
      name,
      dob: dob || undefined,
      breed: breed || undefined,
      species,
      sex: sex || undefined,
      color: color || undefined,
      id_user: userId,
    };

    console.log(JSON.stringify(petData));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    };

    try {
      const response = await fetch('/api/pets', requestOptions);
      const result = await response.json();

      if (response.ok) {
        setSuccess('Pet adicionado com sucesso!');
        setName('');
        setDob('');
        setBreed('');
        setSpecies('');
        setSex('');
        setColor('');
      } else {
        setError(result.error || 'Ocorreu um erro ao adicionar o pet.');
      }
    } catch (error) {
      setError('Erro ao se conectar com o servidor.');
      console.error(error);
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
