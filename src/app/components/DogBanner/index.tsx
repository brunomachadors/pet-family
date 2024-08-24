'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BannerDiv } from './style';
import { client } from '@/app/utils/content/contentful'; // Importa o cliente existente

export function DogBanner() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await client.getAsset('4R3VTDIXNm1V0w8m7kGCH');

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
      <Image
        src={imageUrl}
        alt="French Bulldog"
        width={500}
        height={500}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
      />
    </BannerDiv>
  );
}

export default DogBanner;
