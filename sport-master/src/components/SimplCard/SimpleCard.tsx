import Image from 'next/image';
import styles from './SimpleCard.module.css';
import { FC } from 'react';

interface SimpleCardProps {
  imageUrl: string;
  name: string;
}
const SimpleCard: FC<SimpleCardProps> = ({ imageUrl, name }) => {
  return (
 <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={imageUrl}
                  alt={name}
                  className={styles.image}
                  fill
                  unoptimized
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{name}</h3>
              </div>
            </div>
  );
};

export default SimpleCard;
