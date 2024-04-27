"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";

const SwiperImage = ({ images }: { images: string[] }): JSX.Element => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  return (
    <Fragment>
      <SwiperContainer
        className="swiper-image"
        modules={[Autoplay, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3000 }}
        navigation
        loop={images?.length >= 2}
      >
        {images?.map(
          (image: string): JSX.Element => (
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
          )
        )}
      </SwiperContainer>
      <SwiperContainer
        className="swiper-image-thumb"
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={3}
      >
        {images?.map(
          (image: string): JSX.Element => (
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
          )
        )}
      </SwiperContainer>
    </Fragment>
  );
};

export default SwiperImage;
