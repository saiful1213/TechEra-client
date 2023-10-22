import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
   return (
      <div>
         <div className="relative">
            <Navbar></Navbar>
            <Banner></Banner>
         </div>
         <Brand></Brand>
      </div>
   );
};

export default Home;