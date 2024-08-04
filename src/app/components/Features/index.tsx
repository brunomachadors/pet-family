'use client';

import React, { useEffect, useState } from 'react';
import { Container, FeatureHeader, FeatureItem, FeatureList } from './style';

export type FeatureType = {
  id: number;
  name: string;
};

function Features() {
  const [features, setFeatures] = useState<FeatureType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatures() {
      try {
        const response = await fetch('/api/features');
        const data: FeatureType[] = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error('Error fetching features:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatures();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <FeatureHeader>NOSSOS SERVIÇOS</FeatureHeader>
      <FeatureList>
        {features.map((feature) => (
          <FeatureItem key={feature.id}>{feature.name}</FeatureItem>
        ))}
      </FeatureList>
    </Container>
  );
}

export default Features;
