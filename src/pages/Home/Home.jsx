import { useEffect } from "react";
import PopularArtical from "../../component/PopularArtical/PopularArtical";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhyUS from "../Whyus/WhyUS";
import AOS from 'aos';
import 'aos/dist/aos.css'
import HowToUse from "../Whyus/HowToUse";
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
            <Navbar></Navbar>
            <Banner  ></Banner>
          
          
            <WhyUS></WhyUS>
            <HowToUse></HowToUse>
            <PopularArtical/>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;