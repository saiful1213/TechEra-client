/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <span className="loading loading-spinner loading-lg flex h-screen mx-auto items-center text-pink-700"></span>
   }

   if (!user) {
      return <Navigate to="/login" state={location.pathname}></Navigate>
   }

   return children
};

export default PrivateRoute;