import Banner from "../../Components/Banner/Banner";
import Blog from "../../Components/Blog/Blog";
import Brand from "../../Components/Brand/Brand";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
   return (
      <div className="dark:bg-slate-800">
         <Banner></Banner>
         <Brand></Brand>
         <Blog></Blog>
         <Contact></Contact>
      </div>
   );
};

export default Home;