import styles from './Goods.module.css';
import Link from 'next/link';
import { IRacket } from '@/src/types/racket';
import { FC } from 'react';
import SimpleCard from '../SimplCard/SimpleCard';

interface IProps {
  rackets: IRacket[]
}
const Goods:FC<IProps> = ( {rackets }) => {
  return (
    <section className={styles.section}>
         <div className={styles.horizontalScroll}>
        {rackets.map(({ imageUrl, id, name }) => (
          <Link href={`/racket/${id}`} key={id} className={styles.link} >
            <SimpleCard imageUrl={imageUrl} name={name} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Goods;
