import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
   const loadedData = useLoaderData()
   const { brand, img, option, price } = loadedData;

   const handleAddToCart = productData => {
      console.log(productData)

      fetch(`https://tech-era-server.vercel.app/cartData`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(productData)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            toast.success('add to cart succesfully')
         })
   }

   return (
      <div className="max-w-7xl mx-auto">
         <div className="my-12 md:w-2/4 mx-auto text-center shadow-2xl p-6">
            <img src={img} className="rounded-xl"/>
            <h1 className="font-bold text-3xl my-3 ">Brand Name: {brand}</h1>
            <p className="font-bold my-2">Category: {option}</p>
            <p className="font-bold text-xl my-2">Price: ${price}</p>

            <button className="btn btn-secondary my-3" onClick={() => handleAddToCart(loadedData)}>Add to Cart</button>

         </div>
      </div>
   );
};

export default ProductDetail;