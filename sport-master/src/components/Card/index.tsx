import style from './Card.module.css';
import { rackets } from '../../mocks/data';
import Image from 'next/image';

interface CardProps {
  id: number | string;
}
const RacketCard = ({ id }: CardProps) => {
  const good = rackets.find((good) => good.id === Number(id));

  if (!good) {
    return <h2> Товар не найден</h2>;
  }

  const {
    name,
    brand: { name: model },
    description,
    imageUrl,
    price,
  } = good;

  return (
    <div className={style.wrapper}>
      <div className={style.information}>
        <div className={style.brand}>{model}</div>
        <h2>{name}</h2>
        <div className={style.description}>{description}</div>
      </div>
      <div className={style.image}>
        <Image src={imageUrl} alt={name} fill unoptimized></Image>
      </div>
      <div className={style.price}>€ {price.toFixed(2)} </div>
    </div>
  );
};

export default RacketCard;
