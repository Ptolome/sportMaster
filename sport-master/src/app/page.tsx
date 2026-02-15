import SimpleCard from "../components/SimplCard/SimpleCard";
import styles from "./page.module.css";
import {rackets} from "../mocks/data";

export default function Home() {
  const firstThreeGoods = rackets.slice(0, 3);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Ракетки</h1>
        <div className={styles.wripper}>
          {firstThreeGoods.map((good) => (
              <SimpleCard 
                key={good.id} 
                imageUrl={good.imageUrl} 
                name={good.name} 
              />
            ))}
        </div>
      </main>
    </div>
  );
}
