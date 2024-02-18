import { Helmet } from 'react-helmet';
import Banner from '../component/Home/Banner/Banner';
import RecievedEmails from '../component/Home/Emails/RecievedEmails';
import WhyUS from '../component/Home/WhyUS';
import HowToUse from '../component/Home/HowToUse';
import UserReview from '../component/Home/Review/UserReview';
import Blog from '../component/Home/Blog/Blog';

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;