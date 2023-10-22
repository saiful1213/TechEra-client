import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Error from "../Pages/Error/Error";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/addproduct',
            element: <AddProduct></AddProduct>
         },
         {
            path: '/brand_details/:brand',
            element: <BrandDetails></BrandDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/productadd/${params.brand}`)
         },
         {
            path: `/product_detail/:id`,
            element: <ProductDetail></ProductDetail>,
            loader: ({ params }) => fetch(`http://localhost:5000/productadd/single/${params.id}`)
         },
         {
            path: `/mycart`,
            element: <MyCart></MyCart>,
            loader: () => fetch(`http://localhost:5000/cartData/products`)
         }
      ]
   }
])

export default Routes;