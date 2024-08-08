import React from 'react';
import { Tabs, Tab, TabContent } from './style';
import { PetDetailInfo } from '../PetDetailInfo/style';
import PetDetailInfoComponent from '../PetDetailInfo';

type PetTabsProps = {
  activeTab: string;
  onTabClick: (tab: string) => void;
};

const PetTabs: React.FC<PetTabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <>
      <Tabs>
        <Tab onClick={() => onTabClick('info')} active={activeTab === 'info'}>
          Informações
        </Tab>
        <Tab
          onClick={() => onTabClick('weight')}
          active={activeTab === 'weight'}
        >
          Peso
        </Tab>
        <Tab
          onClick={() => onTabClick('health')}
          active={activeTab === 'health'}
        >
          Saúde
        </Tab>
        <Tab
          onClick={() => onTabClick('contacts')}
          active={activeTab === 'contacts'}
        >
          Contatos
        </Tab>
      </Tabs>
    </>
  );
};

export default PetTabs;
