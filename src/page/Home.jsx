import { Helmet } from 'react-helmet';
import Banner from '../component/Home/Banner/Banner';
import RecievedEmails from '../component/Home/Emails/RecievedEmails';
import WhyUS from '../component/Home/WhyUS';
import HowToUse from '../component/Home/HowToUse';
import UserReview from '../component/Home/Review/UserReview';
import Blog from '../component/Home/Blog/Blog';
import Navber from './../shared/Navber/Navber';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <>
      
        <div className='overflow-x-hidden'>
        <Navber></Navber> 
             <Helmet>
                <title>Swifty Mail | Home</title>
            </Helmet>
            <div>
                <Banner/>
                <RecievedEmails/>
                <WhyUS/>
                <HowToUse/>
                <UserReview/>
                <Blog/>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;