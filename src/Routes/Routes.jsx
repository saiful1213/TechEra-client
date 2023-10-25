import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Error from "../Pages/Error/Error";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Update from "../Pages/Update/Update";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
         },
         {
            path: '/brand_details/:brand',
            element: <BrandDetails></BrandDetails>,
            loader: ({ params }) => fetch(`https://tech-era-server.vercel.app/productadd/${params.brand}`)
         },
         {
            path: `/product_detail/:id`,
            element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
            loader: ({ params }) => fetch(`https://tech-era-server.vercel.app/productadd/single/${params.id}`)
         },
         {
            path: `/mycart`,
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch(`https://tech-era-server.vercel.app/cartData/products`)
         },
         {
            path: '/update/:id',
            element: <PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({ params }) => fetch(`https://tech-era-server.vercel.app/productadd/update/${params.id}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   }
])

export default Routes;