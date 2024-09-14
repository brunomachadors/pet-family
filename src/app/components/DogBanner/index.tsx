'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BannerDiv, ImageWrapper } from './style'; // Importando novo wrapper
import { client } from '@/app/utils/content/contentful';

export function DogBanner() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await client.getAsset('2vC9vADNExgCLwmmRNPD5g');

        if (
          response.fields &&
          response.fields.file &&
          response.fields.file.url
        ) {
          const imageUrl = `https:${response.fields.file.url}`;
          setImageUrl(imageUrl);
        } else {
          console.error('URL da imagem não encontrada no Asset.');
        }
      } catch (error) {
        console.error('Erro ao buscar a imagem do Contentful:', error);
      }
    };

    fetchImage();
  }, []);

  if (!imageUrl) {
    return <div>Carregando...</div>;
  }

  return (
    <BannerDiv>
      <ImageWrapper>
        <Image src={imageUrl} alt="French Bulldog" fill priority />
      </ImageWrapper>
    </BannerDiv>
  );
}

export default DogBanner;
