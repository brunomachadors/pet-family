import { Pets } from './components/pets';
import styles from './page.module.css';
import Banner from './components/banner';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <h1>PET FAMILY</h1>

      <Pets />

      <div>Pagina pets</div>
    </main>
  );
}
