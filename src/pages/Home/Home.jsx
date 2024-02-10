import { useEffect } from "react";
import Banner from "../Banner/Banner";
import WhyUS from "../Whyus/WhyUS";
import AOS from "aos";
import "aos/dist/aos.css";
import HowToUse from "../Whyus/HowToUse";
import FqSection from "../../component/FqSection/FqSection";
import UserReview from "../Review/UserReview";
import RecievedEmails from "../../Emails/RecievedEmails";
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
      <RecievedEmails />
      <WhyUS />
      <HowToUse />
      <UserReview />
     
    </div>
  );
};

export default Home;
