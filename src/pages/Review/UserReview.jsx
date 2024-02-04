
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay } from 'swiper/modules';
import './ReviewStyle.css';

import { EffectCards } from 'swiper/modules';

const UserReview = () => {

    

      return (
        <div className=' max-w-7xl mx-auto'>
          <h1 className='text-4xl drop-shadow  font-bold '> Review section </h1>
          <seqment className="flex justify-center items-center gap-20">  
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards ,Autoplay]}
            className="mySwiper  h-[300px] w-[60%]" 
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
          >
            <SwiperSlide  className='bg-slate-300'>
          <article className='  flex flex-col justify-center items-center text-center' >

          <header className='flex  justify-center items-center gap-4'>
         
          <img className='flex-1' src="kela" alt="kela" /> 
          <div className='flex flex-col justify-center items-center gap-2'>
          <h1> Name</h1>
          <p>date</p>
          </div>

          </header>
          <section >
            <p>rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore quia soluta maxime ab dolore tempore facere sunt mollitia sed!
            </p>
          </section>
          </article>


</SwiperSlide>
          </Swiper>
          <section className='bg-red-400 w-[40%] border-2'>
kela
          </section></seqment>
        </div>
      );
    }
    


export default UserReview;