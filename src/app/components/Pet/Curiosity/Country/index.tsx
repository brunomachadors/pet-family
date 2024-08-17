import React, { useEffect, useState } from 'react';
import { getDogBreedByName } from '@/app/utils/breeds';
import { TDogBreed } from '@/app/types/types';
import { Container, PetDetailFieldName, PetDetailValue } from './style';
import Image from 'next/image';
import { FLAGS } from '@/app/assets/flags';
import { InfoSubTitle } from '../style';

const PetBreedCountry: React.FC<{ breed: string }> = ({ breed }) => {
  const [dogBreedDetails, setDogBreedDetails] = useState<TDogBreed | null>(
    null
  );
  const [flagUrl, setFlagUrl] = useState<string>('');

  useEffect(() => {
    if (breed) {
      const fetchBreedDetails = async () => {
        const result = await getDogBreedByName(breed);
        if (result.success) {
          const breedDetails = result.breed || null;
          setDogBreedDetails(breedDetails);

          if (breedDetails?.country_of_origin) {
            const country =
              breedDetails.country_of_origin as keyof typeof FLAGS;
            setFlagUrl(FLAGS[country] || '');
          }
        } else {
          console.error(result.message);
        }
      };
      fetchBreedDetails();
    }
  }, [breed]);

  if (!dogBreedDetails) {
    return <div>Carregando detalhes...</div>;
  }

  return (
    <Container>
      <InfoSubTitle>Origem</InfoSubTitle>
      <PetDetailFieldName>País de Origem</PetDetailFieldName>
      <PetDetailValue>
        {dogBreedDetails.country_of_origin || 'Desconhecido'}
      </PetDetailValue>
      {flagUrl ? (
        <Image
          src={flagUrl}
          width={50}
          height={50}
          alt={`Bandeira de ${dogBreedDetails.country_of_origin}`}
          priority
        />
      ) : (
        <div>Sem bandeira disponível</div>
      )}
    </Container>
  );
};

export default PetBreedCountry;
