import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {
   const [brands, setBrands] = useState([]);


   const handleBrand = brand => {
      // console.log(brand)
      fetch(`http://localhost:5000/productadd/${brand}`)
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
   }

   useEffect(() => {
      fetch('http://localhost:5000/productadd')
         .then(res => res.json())
         .then(data => setBrands(data))
   }, [])
   return (
      <div className="max-w-7xl mx-auto mt-28 px-8 lg:px-0">
         <h1 className="text-center font-bold my-6 text-4xl dark:text-white">Our Top Brands</h1>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12">
            {
               brands.slice(0, 6).map((brand, idx) =>

                  <div key={idx} className="relative" onClick={() => handleBrand(brand.brand)}>
                     <Link to={`/brand_details/${brand.brand}`}>
                        <img src={brand?.img} className="rounded-lg" />
                        <h2 className="absolute bottom-1 text-white font-bold text-2xl left-1/3">{brand?.brand}</h2>
                     </Link>
                  </div>

               )
            }
         </div>
      </div>
   );
};

export default Brand;