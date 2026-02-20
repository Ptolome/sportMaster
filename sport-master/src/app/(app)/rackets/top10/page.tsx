import { GoodsContainer } from '@/src/components/Goods/Goods-container';
import { Suspense } from 'react';

const Rackets = () => {
  return (
    <div>
      <h2> Ракетки top 10 </h2>
      <Suspense fallback={<div>Loading... </div>}>
        <GoodsContainer />
      </Suspense>
    </div>
  );
};

export default Rackets;
