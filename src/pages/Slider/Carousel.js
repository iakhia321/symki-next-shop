
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import instagramblack from './../../image/instagramblack.png'
import Image from 'next/image'
import Link  from 'next/link';






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
        
      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer"><div>
        <Image src={instagramblack} alt='image' /></div>
        
      </Link></SwiperSlide>

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer">
        
      </Link></SwiperSlide>
       
        
        
      </Swiper>
    </>
  );
}

