
import { GoodsContainer } from '@/src/components/Goods/Goods-container';
import { Suspense } from 'react';
import Loading from './Loading';
const Rackets = () => {
  return (
    <div>
      <h2> Ракетки top 10 </h2>
      <Suspense fallback={<Loading />}>
      <GoodsContainer />
      </Suspense>
    </div>
  );
};

export default Rackets;
