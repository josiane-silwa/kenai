import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

import Info from '../Info'
import Details from '../Details'
import Header from '../Header'
import RatingReview from '../RatingReview'

const Carousel = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div style={{ overflow: 'hidden' }}>
            <Swiper
                spaceBetween={10}
                //navigation={true}
                //thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                className="mySwiper2"
            >
                {
                    images.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Header />
                            <Info props={item}/>
                            <Details props={item}/>
                            <img src={item.img}/>
                        </SwiperSlide>   
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode,Thumbs]}
                className="mySwiper"
                scrollbar={false}
            >
                {
                    images.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.img}/>
                        </SwiperSlide>   
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel