import PopularArtical from "../../component/PopularArtical/PopularArtical";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PopularArtical/>
            <Footer></Footer>
        </div>
    );
};

export default Home;