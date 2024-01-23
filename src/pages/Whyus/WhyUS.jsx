import Lottie from 'lottie-react';
import img from '../../assets/BannerL&Logo/whyUslottie.json'


const WhyUS = () => {
    return (
        <div className=" mt-20 bg-[#019D90] relative  ">
         
                <section className='max-w-7xl shadow-md border-t-2 bg-[#EEEEEE]  p-6 mx-auto text-center z-90 '>
      <header >
            <h1 className="text-3xl drop-shadow-md  text-[#144248] font-bold">Why <span className="text-[#019D90] font-bold">Swifty Mail !</span> </h1>
           <p className="font-semibold py-4">Elevate Your Online Privacy with Our Secure Temporary Email Service.Discover the convenience and security of <span className="text-[#019D90] font-bold">Swifty Mail</span>, <br /> your go-to destination for hassle-free temporary email services. Safeguard your privacy, avoid spam, and simplify your <br /> online interactions with our easy-to-use platform. Choose us for a seamless and secure online experience.</p>
           </header>
           <body className='flex justify-center items-center   gap-4'>
            <aside className=''>
                    hee iasd asdoakdsfkjsdmfkasd
            </aside>
           <Lottie className='h-60 '  animationData={img} loop={true} />
           </body>
           </section>
      
        </div>
    );
};

export default WhyUS;