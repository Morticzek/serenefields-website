import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

interface CarouselItem {
    image: string;
    text: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

const SwiperCarousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentText, setCurrentText] = useState(items[0].text);

    return (
        <div className="carousel-container min-w-[100px] mx-2 md:max-w-3xl xl:max-w-5xl pb-6 lg:p-6 bg-neutral-800 shadow-lg rounded-2xl">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => setCurrentText(items[swiper.realIndex].text)}
                onSwiper={(swiper) => setCurrentText(items[swiper.realIndex].text)}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img className="w-full h-auto rounded-2xl" src={item.image} alt={`Slide ${index + 1}`} width={1920} loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="carousel-text text-center mt-4 subtitle-text text-[#d6d6d6] font-[700] text-xl md:text-3xl">{currentText}</div>
        </div>
    );
};

export default SwiperCarousel;
