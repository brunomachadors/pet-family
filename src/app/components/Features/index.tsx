'use client';

import React, { useEffect, useState } from 'react';
import { Container, FeatureHeader, FeatureItem, FeatureList } from './style';
import { client } from '@/app/utils/content/contentful';
import { FeaturesFields } from '@/app/types/content';

function Features() {
  const [featuresData, setFeaturesData] = useState<FeaturesFields | null>(null);

  useEffect(() => {
    const fetchFeaturesInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'contentfulpetfamily',
        });

        if (response.items.length > 0) {
          const firstItem = response.items[0].fields;

          setFeaturesData({
            subTitle:
              typeof firstItem.subTitle === 'string' ? firstItem.subTitle : '',
            features: Array.isArray(firstItem.features)
              ? firstItem.features.filter((item) => typeof item === 'string')
              : [],
          });
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do Contentful:', error);
      }
    };

    fetchFeaturesInfo();
  }, []);

  if (!featuresData) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <FeatureHeader>{featuresData.subTitle}</FeatureHeader>
      <FeatureList>
        {featuresData.features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeatureList>
    </Container>
  );
}

export default Features;
