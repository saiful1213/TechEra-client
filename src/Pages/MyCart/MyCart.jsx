import { useLoaderData } from "react-router-dom";
import Navbar2 from "../../Components/Navbar2/Navbar2";

const MyCart = () => {
   const loadedData = useLoaderData();
   console.log(loadedData);
   return (
      <div className="max-w-7xl mx-auto">
         <Navbar2></Navbar2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 shadow-xl p-4 mt-16">
            {
               loadedData.map(product => {
                  const { img, brand, price, option } = product
                  return < div key={product._id}>
                     <img src={img} className="rounded-lg"/>
                     <h1 className="text-3xl font-bold my-3">Brand: {brand}</h1>
                     <p className="font-bold text-2xl my-2">price {price}</p>
                     <p className="font-semibold text-xl my-2">category: {option}</p>
                     <button className="btn btn-error my-3">Delete</button>
                  </div>
               }
               )
            }
         </div >
      </div>
   );
};

export default MyCart;