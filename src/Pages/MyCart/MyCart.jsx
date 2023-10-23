/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'


const MyCart = () => {
   const loadedData = useLoaderData();
   const [products, setProducts] = useState(loadedData);

   const handleDelete = id => {

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {

            fetch(`http://localhost:5000/cartData/${id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data)
                  if (data.deletedCount > 0) {
                     const remaining = products.filter(product => product._id !== id);
                     setProducts(remaining);
                     Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                     )
                  }
               })
         }
      })


   }

   return (
      <div className="max-w-7xl mx-auto">
         {
            products.length === 0 ? <h1 className="text-center font-bold text-3xl mt-24">You've No Product Added yet!!</h1>

               :

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4 mt-16">
                  {

                     products?.map(product => {
                        const { _id, img, brand, price, option } = product
                        return < div key={product._id} className="shadow-lg border">
                           <img src={img} className="rounded-lg" />
                           <h1 className="text-3xl font-bold my-3">Brand: {brand}</h1>
                           <p className="font-bold text-2xl my-2">price {price}</p>
                           <p className="font-semibold text-xl my-2">category: {option}</p>

                           <button className="btn btn-error my-3" onClick={() => handleDelete(_id)}>Delete</button>

                        </div>
                     }

                     )
                  }
               </div >
         }

      </div>
   );
};

export default MyCart;