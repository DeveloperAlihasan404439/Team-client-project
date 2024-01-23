import PopularArtical from "../../component/PopularArtical/PopularArtical";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhyUS from "../Whyus/WhyUS";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyUS></WhyUS>
            <PopularArtical/>
            <Footer></Footer>
        </div>
    );
};

export default Home;