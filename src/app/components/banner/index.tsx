'use client';

import Image from 'next/image';
import React from 'react';
import { BannerDiv } from './style';

function Banner() {
  return (
    <BannerDiv>
      <Image
        src="https://res.cloudinary.com/dtglidvcw/image/upload/v1722724009/PET%20FAMILTY/bannerbulldog.webp"
        alt="French Bulldog"
        width={500}
        height={500}
      />
    </BannerDiv>
  );
}

export default Banner;
