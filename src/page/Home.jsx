import Banner from "../component/Banner/Banner";
import RecievedEmails from "../component/Emails/RecievedEmails";
import WhyUS from "../component/WhyUS";
import HowToUse from "../component/HowToUse";
import UserReview from "../component/Review/UserReview";
import Blog from "../component/Blog/Blog";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";
import HelmetTitle from "../shared/HelmetTitle";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navber/>
        <HelmetTitle title="Home"/>
        <Banner />
        <RecievedEmails />
        <WhyUS />
        <HowToUse />
        <UserReview />
        <Blog/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
