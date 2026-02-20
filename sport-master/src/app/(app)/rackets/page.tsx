import { GoodsContainer } from '@/src/components/Goods/Goods-container';
import { Suspense } from 'react';
const Rackets = () => {
  return (
    <div>
      <h2> Ракетки </h2>
      <Suspense fallback={<div>Loading...</div>}>
        <GoodsContainer limit={20} />
      </Suspense>
    </div>
  );
};

export default Rackets;
