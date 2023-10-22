/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Navbar2 from "../Navbar2/Navbar2";

const BrandDetails = () => {
   const loadedData = useLoaderData();


   return (
      <div>

         <Navbar2></Navbar2>

         <Slider loadedData={loadedData}></Slider>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto my-12">
            {
               loadedData.slice(0, 4).map(data => {
                  const { img, name, brand, option, price } = data;
                  if (data.brand === 'intel') {
                     return (
                        <div key={data._id} className="text-center col-span-4">
                           <h1 className="text-2xl font-bold mb-6">no products available</h1>
                           <Link to={-1}><button className="btn btn-error">Go Back</button></Link>
                        </div>

                     )
                  } else {
                     return (
                        <div key={data._id} className="p-4 shadow-lg">
                           <img src={img} className="rounded-lg" />
                           <h1 className="text-2xl font-bold mt-3 mb-2">{name}</h1>
                           <h2 className="text-xl font-semibold mb-1">Brand: {brand}</h2>
                           <p className="text-lg font-medium mb-1">Type: {option}</p>
                           <p className="text-xl font-bold mb-1">Price: {price}</p>
                           <p className="font-medium mb-1">Rating: 4.5</p>
                           <div className="flex items-center justify-between">

                              <Link to={`/product_detail/${data._id}`}>
                                 <button className="btn btn-secondary">Details</button>
                              </Link>

                              <button className="btn btn-outline btn-secondary">Update</button>
                           </div>
                        </div>)
                  }
               }
               )
            }
         </div>

      </div>
   );
};

export default BrandDetails;