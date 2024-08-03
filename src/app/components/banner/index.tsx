'use client'; // Adicione esta linha no topo do arquivo

import Image from 'next/image';
import React from 'react';
import { BannerDiv } from './style';

function Banner() {
  return (
    <BannerDiv>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/027/246/984/original/french-bulldog-isolated-on-transparent-background-ai-generated-png.png"
        alt="French Bulldog"
        width={500}
        height={500}
      />
    </BannerDiv>
  );
}

export default Banner;
