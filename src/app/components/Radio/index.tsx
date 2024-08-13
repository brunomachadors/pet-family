import React from 'react';

import { Label, Radio, RadioContainer, RadioLabel } from './style';

type SexRadioGroupProps = {
  sex: string;
  onSexChange: (sex: string) => void;
};

export const SexRadioGroup: React.FC<SexRadioGroupProps> = ({
  sex,
  onSexChange,
}) => {
  return (
    <>
      <Label>Sexo</Label>
      <RadioContainer>
        <RadioLabel>
          <Radio
            type="radio"
            name="sex"
            value="M"
            checked={sex === 'M'}
            onChange={() => onSexChange('M')}
          />
          Macho
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            name="sex"
            value="F"
            checked={sex === 'F'}
            onChange={() => onSexChange('F')}
          />
          Fêmea
        </RadioLabel>
      </RadioContainer>
    </>
  );
};
