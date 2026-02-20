import styles from './RacketCard.module.css';
import Image from 'next/image';
import { IRacket } from '@/src/types/racket';
import { FC } from 'react';

interface IProps {
  data: IRacket;
}

const RacketCard: FC<IProps> = ({
  data: { name, description, imageUrl, price },
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.information}>
        <div className={styles.brand}>{}</div>
        <h2>{name}</h2>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.image}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.price}>€ {price?.toFixed(2)}</div>
    </div>
  );
};

export default RacketCard;
