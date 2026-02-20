import styles from './page.module.css';
import { GoodsContainer } from '@/src/components/Goods/Goods-container';
import { GoodsContainerTop10 } from '@/src/components/Goods/Goods-container-top10';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h2>Ракетки</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <GoodsContainer />
          </Suspense>
          <h2>Ракетки TOP 10</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <GoodsContainerTop10 />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
