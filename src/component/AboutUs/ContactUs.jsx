import Lottie from 'lottie-react';
import contact from '../../assets/BannerL&Logo/contact.json';
import contactbg from '../../assets/BannerL&Logo/contacBg.jpg';
import BestOutput from './BestOutput';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md"
import ContactInput from './ContactInput';
const ContactUs = () => {
    return (
        <div className=" ">
            <div className="hero " >
                <img className='object-cover h-full w-fill rounded-xl drop-shadow-md border-t-2 opacity-50' src={contactbg} alt="" />
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content items-start  lg:p-12 justify-start flex flex-col gap-16 lg:flex-row  ">
  <section className='lg:w-1/2'>

            <Lottie className='h-80 w-full lg:col-span-2 lg:row-span-2' animationData={contact} loop={true} />
            <div className=' p-4 rounded-xl backdrop-blur'> 
                <h1 className='text-2xl backdrop-blur font-semibold'>Maximizing Your <span className='font-semibold text-[#019D90]'>Swifty Mail </span> Experience: A Guide to Optimal Output</h1>
                <BestOutput title={"Explore Customization Features:"} description={'Personalize your temporary email experience by exploring customization options. Tailor settings to match your preferences, ensuring seamless integration with your online activities.'}></BestOutput>
                <BestOutput title={"Efficient Email Management:"} description={'Learn the ins and outs of managing your temporary emails effortlessly. From creation to disposal, understand the features that make email management a breeze.'}></BestOutput>
                <BestOutput title={"Advanced Verification Techniques:"} description={'Dive into advanced techniques for efficient email verification. Discover how Swifty Mail simplifies the verification process, saving you time and ensuring you never miss an important confirmation.'}></BestOutput>
                <BestOutput title={"Integrate with Third-Party Services:"} description={'Uncover the potential of integrating Swifty Mail with various third-party services. Explore how our platform seamlessly collaborates with other tools to enhance your overall online experience.'}></BestOutput>
                <BestOutput title={"Stay Informed with Notifications:"} description={'Optimize your usage by staying informed. Learn how to enable notifications, keeping you updated on incoming emails, verifications, and important activities without missing a beat.'}></BestOutput>
                <BestOutput title={"Mastering Privacy Settings:"} description={'Understand the nuances of privacy settings to fortify your online presence. Swifty Mail offers robust privacy features; discover how to leverage them effectively for enhanced security.'}></BestOutput>
            </div>
            </section>
            <section className='lg:w-1/2 text-center  '>
            <h1 className="text-4xl   font-bold backdrop-blur  " >Have Questions? <br className='md:hidden' /> Shoot Us on   <span className="text-[#019D90] font-black"> Email</span> </h1>
            <div className='mt-8 flex flex-wrap justify-center items-center gap-8 backdrop-blur rounded-xl'>
            <segment className='flex flex-col justify-center items-center gap-2'> <p className='text-5xl text-[#019D90] font-black'><MdMarkEmailRead /></p> 
             <p className='text-lg font-semibold'>Email Us </p> 
            <p className='text-sm'>zzayedghost@gmail.com</p>
            </segment>
            <segment className='flex flex-col justify-center items-center gap-2'> <p className='text-5xl text-[#019D90] font-black'><FaPhoneVolume /></p> 
             <p className='text-lg font-semibold'>Contact number </p> 
            <p className='text-sm'>01902320296</p>
            </segment>
            <segment className='flex flex-col justify-center items-center gap-2'> <p className='text-5xl text-[#019D90] font-black'><FaSquareFacebook /></p> 
             <p className='text-lg font-semibold'>Facebook</p> 
            <p className='text-sm cursor-pointer hover:underline'>click here to visit  our page </p>
            </segment>

            
            </div>
            <ContactInput></ContactInput>
            </section>
  </div>
</div>
            
        </div>
    );
};

export default ContactUs;