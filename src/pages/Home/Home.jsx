import { useEffect } from "react";
import PopularArtical from "../../component/PopularArtical/PopularArtical";
import Banner from "../Banner/Banner";
import WhyUS from "../Whyus/WhyUS";
import AOS from 'aos';
import 'aos/dist/aos.css'
import HowToUse from "../Whyus/HowToUse";
import FqSection from "../../component/FqSection/FqSection";
import UserReview from "../Review/UserReview";
const Home = () => {
    
useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])
    return (
        <div className="overflow-x-hidden">
            <Banner  ></Banner>
            <WhyUS></WhyUS>
            <HowToUse></HowToUse>
            <PopularArtical/>
            <UserReview></UserReview>
            <FqSection/>
            <Footer></Footer>
        </div>
    );
};

export default Home;