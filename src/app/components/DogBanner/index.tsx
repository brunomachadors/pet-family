'use client';

import Image from 'next/image';
import React from 'react';
import { BannerDiv } from './style';

export function DogBanner() {
  return (
    <BannerDiv>
      <Image
        src="https://res.cloudinary.com/dtglidvcw/image/upload/v1722724009/PET%20FAMILTY/bannerbulldog.webp"
        alt="French Bulldog"
        width={500}
        height={500}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
      />
    </BannerDiv>
  );
}
