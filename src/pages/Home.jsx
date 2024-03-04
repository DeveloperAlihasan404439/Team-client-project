import Banner from "../component/Banner/Banner";
import Blog from "../component/Blog/Blog";
import RecievedEmails from "../component/Emails/RecievedEmails";
import HowToUse from "../component/HowToUse";
import UserReview from "../component/Review/UserReview";
import WhyUS from "../component/WhyUS";
import Footer from "../shared/Footer/Footer";
import HelmetTitle from "../shared/HelmetTitle";
import Navber from "../shared/Navber/Navber";

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
