'use client';
import React, { useEffect, useState } from 'react';
import {
  LandingInfoContainer,
  LandingInfoContent,
  LandingInfoHeader,
  LandingInfoHeaderSub,
} from './style';
import { client } from '@/app/utils/content/contentful';

interface LandingInfoFields {
  welcome?: string;
  landingSub?: string;
  landingContent?: string;
}

export function LandingInfo() {
  const [landingInfo, setLandingInfo] = useState<LandingInfoFields | null>(
    null
  );

  useEffect(() => {
    const fetchLandingInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'contentfulpetfamily',
        });

        if (response.items.length > 0) {
          // Verifique e cast os campos de acordo com o tipo esperado
          const firstItem = response.items[0].fields as LandingInfoFields;

          setLandingInfo({
            welcome:
              typeof firstItem.welcome === 'string' ? firstItem.welcome : '',
            landingSub:
              typeof firstItem.landingSub === 'string'
                ? firstItem.landingSub
                : '',
            landingContent:
              typeof firstItem.landingContent === 'string'
                ? firstItem.landingContent
                : '',
          });
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do Contentful:', error);
      }
    };

    fetchLandingInfo();
  }, []);

  if (!landingInfo) {
    return <div>Carregando...</div>;
  }

  return (
    <LandingInfoContainer>
      <LandingInfoHeader>{landingInfo.welcome}</LandingInfoHeader>
      <LandingInfoHeaderSub>{landingInfo.landingSub}</LandingInfoHeaderSub>
      <LandingInfoContent>{landingInfo.landingContent}</LandingInfoContent>
    </LandingInfoContainer>
  );
}

export default LandingInfo;
