import { useEffect } from "react";
import Banner from "../Banner/Banner";
import WhyUS from "../Whyus/WhyUS";
import AOS from "aos";
import "aos/dist/aos.css";
import HowToUse from "../Whyus/HowToUse";
import FqSection from "../../component/FqSection/FqSection";
import UserReview from "../Review/UserReview";
import RecievedEmails from "../../Emails/RecievedEmails";
import { Link } from "react-router-dom";
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
    <div className="overflow-x-hidden relative">
      <Banner />
      <Link to="/payment"><button className="btn-ghost btn">pay for premium</button></Link>
      <RecievedEmails />
      <WhyUS />
      <HowToUse />
      <UserReview />
      
     
    </div>
  );
};

export default Home;
