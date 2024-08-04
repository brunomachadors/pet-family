import styles from './page.module.css';

import LandingInfo from './components/LandingInfo';
import Features from './components/Features';
import Banner from './components/banner';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <LandingInfo />
      <Features />
    </main>
  );
}
