'use client';
import styles from './RacketCard.module.css';
import Image from 'next/image';
import { IRacket } from '@/src/types/racket';
import { FC, use } from 'react';
import { UserContext } from '@/src/providers/UserProvider';
import FavoritButton from '../favorit-button/favorit-button';
import Favorit from '/favorite.svg';

interface IProps {
  data: IRacket;
}

const RacketCard: FC<IProps> = ({
  data: {
    name,
    description,
    imageUrl,
    price,
    userData: { isFavorite },
  },
}) => {
  const user = use(UserContext);
  console.log(user);

  return (
    <div className={styles.wrapper}>
      <div className={styles.information}>
        <div className={styles.brand}>{}</div>
        <h2>{name}</h2>
        <div className={styles.description}>{description}</div>
        {user && <FavoritButton isFavorite={isFavorite} />}
      </div>
      <div className={styles.image}>
        <div className={styles.imageLike}>
          {isFavorite && (
            <Image src="/favorite.svg" alt="Favorit" width={80} height={80} />
          )}
        </div>
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
