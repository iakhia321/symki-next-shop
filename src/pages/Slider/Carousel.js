
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import { Link } from 'react-router-dom';






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Slider.sass';

// import required modules
import { Navigation, EffectFade } from 'swiper/modules';

export default function Carousel() {
  return (
    
    <>
      <Swiper 
      modules={[Navigation, EffectFade]}
      
      spaceBetween={50} 
      navigation={true} 
      
      slidesPerView={3}
      className="mySwiper"
      loop={true}
      
      >
        
        <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>
       
        
        
      </Swiper>
    </>
  );
}

