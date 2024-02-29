import Banner from "../component/Home/Banner/Banner";
import RecievedEmails from "../component/Home/Emails/RecievedEmails";
import WhyUS from "../component/Home/WhyUS";
import HowToUse from "../component/Home/HowToUse";
import UserReview from "../component/Home/Review/UserReview";
import Blog from "../component/Home/Blog/Blog";
import Navber from "./../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";
import HelmetTitle from "../shared/HelmetTitle";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navber></Navber>
        <HelmetTitle title="Home"/>
        <Banner />
        <RecievedEmails />
        <WhyUS />
        <HowToUse />
        <UserReview />
        <Blog />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
