
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay } from 'swiper/modules';
import './ReviewStyle.css';

import { EffectCards } from 'swiper/modules';

const UserReview = () => {

    

      return (
        <div className=' max-w-6xl mx-auto'>
          <h1 className='text-4xl drop-shadow  font-bold '> Review section </h1>
          <seqment className="flex justify-center items-center gap-20">  
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[ EffectCards,Autoplay]}
            className="mySwiper  h-[300px] w-[100%]" 
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
          >
            <SwiperSlide  className='bg-[#EEEEEE] '>
         
<div className="flex items-center justify-center ">
    <div className="w-full mx-auto rounded-lg ">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" className="relative block">
                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div className="w-full mb-10">
            <div className="h-3 text-3xl leading-tight text-left ">
                “
            </div>
            <p className="px-5 text-black text-sm text-center ">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam eum? Laborum dolorum odio iste neque tenetur voluptatem dignissimos? Quam.                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </p>
            <div className="h-3 -mt-3 text-3xl leading-tight text-right ">
                ”
            </div>
        </div>
        <div className="w-full">
            <p className="font-bold text-center  text-md">
                Tom Hardy
            </p>
            <p className="text-xs text-center ">
                @thom.hardy
            </p>
        </div>
    </div>
</div>



</SwiperSlide>
            <SwiperSlide  className='bg-[#EEEEEE] '>
         
<div className="flex items-center justify-center px-5 text-black py-5">
    <div className="w-full px-5 text-black pt-5 pb-10 mx-auto rounded-lg ">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" className="relative block">
                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div className="w-full mb-10">
            <div className="h-3 text-3xl leading-tight text-left ">
                “
            </div>
            <p className="px-5 text-black text-sm text-center ">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam eum? Laborum dolorum odio iste neque tenetur voluptatem dignissimos? Quam.                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </p>
            <div className="h-3 -mt-3 text-3xl leading-tight text-right ">
                ”
            </div>
        </div>
        <div className="w-full">
            <p className="font-bold text-center  text-md">
                Tom Hardy
            </p>
            <p className="text-xs text-center ">
                @thom.hardy
            </p>
        </div>
    </div>
</div>



</SwiperSlide>
            <SwiperSlide  className='bg-[#EEEEEE] '>
         
<div className="flex items-center justify-center px-5 text-black py-5">
    <div className="w-full px-5 text-black pt-5 pb-10 mx-auto rounded-lg ">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" className="relative block">
                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div className="w-full mb-10">
            <div className="h-3 text-3xl leading-tight text-left ">
                “
            </div>
            <p className="px-5 text-black text-sm text-center ">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam eum? Laborum dolorum odio iste neque tenetur voluptatem dignissimos? Quam.                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </p>
            <div className="h-3 -mt-3 text-3xl leading-tight text-right ">
                ”
            </div>
        </div>
        <div className="w-full">
            <p className="font-bold text-center  text-md">
                Tom Hardy
            </p>
            <p className="text-xs text-center ">
                @thom.hardy
            </p>
        </div>
    </div>
</div>



</SwiperSlide>
            <SwiperSlide  className='bg-[#EEEEEE] '>
         
<div className="flex items-center justify-center px-5 text-black py-5">
    <div className="w-full px-5 text-black pt-5 pb-10 mx-auto rounded-lg ">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" className="relative block">
                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div className="w-full mb-10">
            <div className="h-3 text-3xl leading-tight text-left ">
                “
            </div>
            <p className="px-5 text-black text-sm text-center ">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam eum? Laborum dolorum odio iste neque tenetur voluptatem dignissimos? Quam.                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </p>
            <div className="h-3 -mt-3 text-3xl leading-tight text-right ">
                ”
            </div>
        </div>
        <div className="w-full">
            <p className="font-bold text-center  text-md">
                Tom Hardy
            </p>
            <p className="text-xs text-center ">
                @thom.hardy
            </p>
        </div>
    </div>
</div>



</SwiperSlide>
          </Swiper>
          {/* <section className='bg-red-400 w-[40%] border-2'>
kela
          </section> */}
          </seqment>
        </div>
      );
    }
    


export default UserReview;