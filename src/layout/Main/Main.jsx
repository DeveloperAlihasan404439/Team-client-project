import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
const Main = () => {
  return (
    <div>
      <Toaster />
     
      <Outlet />
     
    </div>
  );
};

export default Main;
