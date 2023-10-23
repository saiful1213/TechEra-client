import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet>
         </Outlet>
         <ToastContainer />
         <Footer></Footer>
      </div>
   );
};

export default Root;