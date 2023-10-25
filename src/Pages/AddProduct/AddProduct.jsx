import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

   const handleAddProduct = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const brand = form.BOption.value;
      const img = form.img.value;
      const price = form.price.value;
      const option = form.option.value;
      const desc = form.desc.value;

      const product = { name, brand, img, price, option, desc }
      fetch('https://tech-era-server.vercel.app/productadd', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(product)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId) {
               toast("new product added succesfully!");
            }
         })
   }

   return (
      <div className="max-w-7xl mx-auto">
         <h1 className="text-3xl font-bold text-center mt-12 mb-6">Add Your Product</h1>

         <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleAddProduct}>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Product Name</span>
                  </label>
                  <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Brand Name</span>
                  </label>
                  <select className="border border-gray-300 rounded-lg p-4" name="BOption">
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
                  <select className="border border-gray-300 rounded-lg p-4" name="option">
                     <option value="phone">phone</option>
                     <option value="computer">computer</option>
                     <option value="headphone">headphone</option>
                  </select>
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Image</span>
                  </label>
                  <input type="text" placeholder="your image url" name="img" className="input input-bordered" required />
               </div>
               <div>
                  <div className="flex items-center gap-6">
                     <div className="form-control w-1/2">
                        <label className="label">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" className="input input-bordered" required />
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
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Description</span>
                     </label>
                     <textarea name="desc" rows="5" placeholder="Write Your Short Description...." className="border rounded-lg resize-none border-gray-300 p-4"></textarea>
                  </div>
               </div>
               <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Product</button>
               </div>
            </form>
         </div>


      </div>
   );
};

export default AddProduct;