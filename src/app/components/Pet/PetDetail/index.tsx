'use client';
import React, { useState } from 'react';
import { PetType } from '@/app/utils/types';
import { PetDetailContainer, PetDetailHeader } from './style';
import PetDetailInfoComponent from '../PetDetailInfo';
import PetTabs from '../PetTabs';

type PetDetailProps = {
  pet: PetType;
};

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const [activeTab, setActiveTab] = useState('info');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <PetDetailContainer>
      <PetDetailHeader>
        <h1>{pet.name.toUpperCase()}</h1>
      </PetDetailHeader>
      <PetTabs activeTab={activeTab} onTabClick={handleTabClick} />
      {activeTab === 'info' && <PetDetailInfoComponent pet={pet} />}
      {activeTab === 'weight' && <p>Peso: Informações de peso aqui.</p>}
      {activeTab === 'health' && <p>Saúde: Informações de saúde aqui.</p>}
      {activeTab === 'contacts' && (
        <p>Contatos: Informações de contatos aqui.</p>
      )}
    </PetDetailContainer>
  );
};

export default PetDetail;
