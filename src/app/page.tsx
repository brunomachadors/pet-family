'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Certifique-se de estar usando o pacote correto
import { useEffect } from 'react';

import styles from './page.module.css';
import LandingInfo from './components/LandingInfo';
import Features from './components/Features';
import { DogBanner } from './components/DogBanner';

export default function Landing() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/pages/home');
    }
  }, [isSignedIn, router]);

  if (isSignedIn) {
    return null;
  }

  return (
    <main className={styles.main}>
      <DogBanner />
      <LandingInfo />
      <Features />
    </main>
  );
}
