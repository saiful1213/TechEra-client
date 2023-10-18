import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
   return (
      <div>
         <div className="relative">
            <Navbar></Navbar>
            <Banner></Banner>
         </div>
      </div>
   );
};

export default Home;