import styles from './page.module.css';
import Banner from './components/Banner';
import LandingInfo from './components/LandingInfo';
import Features from './components/Features';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <LandingInfo />
      <Features />
    </main>
  );
}
