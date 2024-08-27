'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TPet } from '@/app/types/types';
import { Divider, PetDetailContainer, PetDetailHeader } from './style';
import PetDetailInfoComponent from '../Info';
import Image from 'next/image';
import { breedImageMap, defaultImageUrl } from '@/app/assets/imageLinks';
import { PetImageContainer } from '../PetCard/style';
import PetDetailWeighComponent from '../Weight';
import PetDetailHealthComponent from '../Health';
import PetDetailCuriosityComponents from '../Curiosity';
import PetAppointments from '../Appointments';
import { useUser } from '@clerk/nextjs';
import { initializeUser } from '@/app/utils/user/user';
import { verifyPet } from '@/app/utils/pet/pets';

type PetDetailProps = {
  pet: TPet;
};

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const [currentPet, setCurrentPet] = useState<TPet>(pet);
  const { user } = useUser();
  const [userId, setUserId] = useState<number | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [redirectMessage, setRedirectMessage] = useState<string>(''); // Estado para controlar a mensagem de redirecionamento
  const router = useRouter();

  useEffect(() => {
    const fetchUserId = async () => {
      if (user) {
        const userObj = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.emailAddresses[0]?.emailAddress,
          id: user.id,
          externalId: user.id,
        };

        const verifiedUserId = await initializeUser(userObj);

        if (verifiedUserId !== null) {
          setUserId(verifiedUserId);
        }
      }
    };

    fetchUserId();
  }, [user]);

  useEffect(() => {
    const fetchPet = async () => {
      if (userId !== null && pet.pet_id !== undefined) {
        const verifiedPet = await verifyPet(userId, pet.pet_id);

        if (verifiedPet) {
          setIsVerified(true);
        } else {
          setRedirectMessage(
            'Este pet não pertence a você! Redirecionando em 5 segundos...'
          );
          setTimeout(() => {
            router.push('/pages/mypets');
          }, 5000); // Redireciona após 5 segundos
        }
      }
    };

    fetchPet();
  }, [userId, pet.pet_id, router]);

  if (!isVerified) {
    return <p>{redirectMessage}</p>; // Exibe a mensagem de redirecionamento
  }

  const imageUrl =
    pet.breed && breedImageMap[pet.breed]
      ? breedImageMap[pet.breed]
      : defaultImageUrl;

  const handleUpdatePet = (updatedPet: TPet) => {
    setCurrentPet(updatedPet);
  };

  return (
    <PetDetailContainer>
      <PetDetailHeader>{currentPet.name.toUpperCase()}</PetDetailHeader>
      <PetImageContainer>
        <Image
          src={imageUrl}
          alt={currentPet.breed ? currentPet.breed : 'Imagem padrão'}
          width={100}
          height={100}
          priority
        />
      </PetImageContainer>
      <PetDetailInfoComponent pet={currentPet} onUpdatePet={handleUpdatePet} />
      <Divider />
      <PetDetailWeighComponent pet={currentPet} />
      <Divider />
      <PetAppointments pet={currentPet} />
      <Divider />
      <PetDetailHealthComponent />

      {currentPet.species === 'Cachorro' && (
        <>
          <Divider />
          <PetDetailCuriosityComponents
            breed={currentPet.breed || 'Sem raça'}
          />
        </>
      )}
    </PetDetailContainer>
  );
};

export default PetDetail;
