
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import symka1 from './../../image/symka1.jpg'
import symka2 from './../../image/symka2.jpg'

import symka4 from './../../image/symka4.jpg'
import symka5 from './../../image/symka5.jpg'
import symka6 from './../../image/symka6.jpg'
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
        <Image src={symka1} /></div>
        
      </Link></SwiperSlide>

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer"><div>
        <Image src={symka2} /></div>
        
      </Link></SwiperSlide>

      
        
      

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer"><div>
        <Image src={symka4} /></div>
        
      </Link></SwiperSlide>

      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer"><div>
        <Image src={symka5} /></div>
        
      </Link></SwiperSlide>
      
      <SwiperSlide><Link href="/shop/shop" target="_self" rel="noreferrer"><div>
        <Image src={symka6} /></div>
        
      </Link></SwiperSlide>
       
        
        
      </Swiper>
    </>
  );
}

