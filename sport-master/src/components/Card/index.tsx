import style from "./Card.module.css"
import {rackets} from "../../mocks/data" 
import Image from "next/image"

interface CardProps {
    id: number | string;
};
const index = ({id}: CardProps) => {
   const good = rackets.find(good => good.id === Number(id))
   
   if (!good){
    return (
        <h1> Товар не найден</h1>
    )
   }

   const {name, model, description, imageUrl, price} = good

  return (
    <div className={style.wripper}>
      <div className={style.information}>
        <div className={style.brand}>{name}</div>
        <h1>{model}</h1>
        <div className={style.description}>{description}</div>
      </div>
      <div className={style.image}>
        <Image src={imageUrl} alt={name} fill unoptimized></Image>
      </div>
      <div className={style.price}>{price} 💲</div>
    </div>
  )
}

export default index
