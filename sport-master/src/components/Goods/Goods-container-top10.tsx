import Goods from './Goods';
import { getRacketsTop10 } from '@/src/services/get-rackets-top-10';

export const GoodsContainerTop10 = async () => {
  const { isError, data } = await getRacketsTop10();

  if (isError) {
    throw new Error();
  }
  if (!data) {
    return 'No data ';
  }
  return <Goods rackets={data} />;
};
