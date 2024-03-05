import Banner from "../component/Banner/Banner";
import RecievedEmails from "../component/Emails/RecievedEmails";
import WhyUS from "../component/WhyUS";
import HowToUse from "../component/HowToUse";
import UserReview from "../component/Review/UserReview";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";

// added the project title daynamic
import HelmetTitle from "../shared/HelmetTitle";
import Blog from "../component/Home/Blog/Blog";
import Subscription from "../component/Subscription/Subscription";

const Home = () => {
  const navberBgDark = true;
  return (
    <>
      <div className="overflow-x-hidden">
        <Navber navberBgDark={navberBgDark}/>
        <HelmetTitle title="Home"/>
        <Banner />
        <RecievedEmails />
        <WhyUS />
        <HowToUse />
        <Subscription/>
        <UserReview />
         <Blog/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
