import { useLoaderData, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Update = () => {
   const { id } = useParams();
   const loadedData = useLoaderData();
   console.log(loadedData)
   const { img, name, brand, option, price } = loadedData;

   const handleUpdateProduct = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const brand = form.BName.value;      
      const option = form.option.value;
      const img = form.img.value;
      const price = form.price.value;
      const product = { name, brand, img, price, option }

      fetch(`https://tech-era-server.vercel.app/productadd/update/${id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(product)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               toast.success('succesfully product updated')
            }
         })
   }


   return (
      <div className="max-w-7xl mx-auto">
         <h1 className="text-3xl font-bold text-center mt-12 mb-6">Update Your Product</h1>
         <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleUpdateProduct}>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Product Name</span>
                  </label>
                  <input type="text" placeholder="Product name" name="name" defaultValue={name} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Brand Name</span>
                  </label>
                  <select className="border border-gray-300 rounded-lg p-4" defaultValue={brand} name="BName">
                     <option value="apple">apple</option>
                     <option value="samsung">samsung</option>
                     <option value="nokia">nokia</option>
                     <option value="intel">intel</option>
                     <option value="google">google</option>
                     <option value="sony">sony</option>
                  </select>
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Product Type</span>
                  </label>
                  <select className="border border-gray-300 rounded-lg p-4" defaultValue={option} name="option">
                     <option value="phone">phone</option>
                     <option value="computer">computer</option>
                     <option value="headphone">headphone</option>
                  </select>
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Image</span>
                  </label>
                  <input type="text" placeholder="your image url" name="img" defaultValue={img} className="input input-bordered" />
               </div>
               <div>
                  <div className="flex items-center gap-6">
                     <div className="form-control w-1/2">
                        <label className="label">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" defaultValue={price} className="input input-bordered" />
                     </div>
                     <div className="form-control w-1/2">
                        <label className="label">
                           <span className="label-text">Rating</span>
                        </label>
                        <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Update;