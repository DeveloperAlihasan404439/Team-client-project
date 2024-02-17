import { useEffect } from "react";
import Banner from "../Banner/Banner";
import WhyUS from "../Whyus/WhyUS";
import AOS from "aos";
import "aos/dist/aos.css";
import HowToUse from "../Whyus/HowToUse";
import FqSection from "../../component/FqSection/FqSection";
import UserReview from "../Review/UserReview";
import Blog from "../../component/Blog/Blog";

import RecievedEmails from "../../Emails/RecievedEmails";

import TimeDifference from "../../Hooks/TimeDifference";
import NavBar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <NavBar></NavBar>
      <Banner></Banner>
      <WhyUS></WhyUS>
      <HowToUse></HowToUse>
      <UserReview></UserReview>
     
      <Blog />
     <Footer></Footer>
    </div>
  );
};

export default Home;
