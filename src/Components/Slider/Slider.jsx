/* eslint-disable react/prop-types */// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = ({ loadedData }) => {
   return (
      <div className='max-w-7xl mx-auto my-24'>
         <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={2}
         >
            {
               loadedData.map((slideContent, idx) => {
                  if (slideContent.brand === 'intel') {
                     return ('')
                  } else {
                     return (<SwiperSlide key={idx}><img src={slideContent.img} className='rounded-lg h-96' /></SwiperSlide>)
                  }
               })
            }
         </Swiper>
      </div >
   );
};

export default Slider;