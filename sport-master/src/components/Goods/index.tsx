'use client';
import { rackets } from "../../mocks/data";
import Image from "next/image";
import { A11y, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Goods.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

const Goods = () => {
  return (
    <section className={styles.section}>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className={styles.swiper}
      >
        {rackets.map(({ imageUrl, id, name }) => (
          <SwiperSlide key={id} className={styles.slide}>
            <Link href={`/racket/${id}`}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={imageUrl} 
                  alt={name} 
                  width={400} 
                  height={800} 
                  className={styles.image}
                  unoptimized
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{name}</h3>
               
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Goods;