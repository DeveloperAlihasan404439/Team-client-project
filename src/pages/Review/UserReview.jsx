

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay } from 'swiper/modules';
import './ReviewStyle.css';

import { EffectCards } from 'swiper/modules';

const UserReview = () => {

    

      return (
        <div className='flex justify-center items-center gap-20 max-w-7xl mx-auto'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards ,Autoplay]}
            className="mySwiper  h-[500px] w-[60%]" 
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
          >
            <SwiperSlide  className='bg-slate-300'>Slide 1</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 2</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 3</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 4</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 5</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 6</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 7</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 8</SwiperSlide>
            <SwiperSlide className='bg-slate-300'>Slide 9</SwiperSlide>
          </Swiper>
          <section className='bg-red-400 w-[40%] border-2'>
kela
          </section>
        </div>
      );
    }
    


export default UserReview;