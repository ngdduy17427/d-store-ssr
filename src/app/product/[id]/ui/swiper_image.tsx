"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperImage = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Fragment>
      <Swiper
        className="swiper-image"
        modules={[Autoplay, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3000 }}
        navigation
        loop={images?.length >= 2}
      >
        {images?.map((image: string) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt="Product image"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={100}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="swiper-image-thumb"
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={3}
      >
        {images?.map((image: string) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt="Product image"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={100}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default SwiperImage;
