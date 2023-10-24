import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useTheme } from "../../Hook/useTheme";
import {BsFillSunFill, BsMoonFill} from "react-icons/bs"

const Navbar = () => {
   const { user, handleSignOut } = useContext(AuthContext);
   const { theme, handleTheme } = useTheme();

   const handleLogOut = () => {
      handleSignOut()
         .then(toast.success('sign out succesfully'))
         .catch(error => {
            toast.error(error.message)
         })
   }

   const navLinks = <>
      <NavLink
         to="/"
         className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-pink-500" : ""
         }
      >
         <li className="font-medium text-lg mr-8 hover:underline hover:text-pink-500">Home</li>
      </NavLink>
      <NavLink
         to="/addproduct"
         className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-pink-500" : ""
         }
      >
         <li className="font-medium text-lg mr-8 hover:underline hover:text-pink-500">Add Product</li>
      </NavLink>
      <NavLink
         to="/mycart"
         className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-pink-500" : ""
         }
      >
         <li className="font-medium text-lg hover:underline hover:text-pink-500">My Cart</li>
      </NavLink>
   </>

   return (
      <div className="w-full bg-gray-800 text-white">
         <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <Link to="/"><img src="https://i.ibb.co/QjnZk5q/logo3-removebg-preview-1.png" className="w-[100px]" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">
               <button className="py-2 px-4 rounded-lg border mr-5" onClick={handleTheme}>{theme === 'light' ? <BsMoonFill size={'1.2rem'}/> : <BsFillSunFill size={'1.2rem'}/>}</button>
               {
                  user
                     ?
                     <div className="dropdown dropdown-bottom dropdown-end" tabIndex={0}>
                        <div className="avatar">
                           <div className="w-12 rounded-full bg-gray-800">
                              <img src={user?.photoURL} />
                           </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-52">
                           <li>
                              <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                           </li>
                           <li className=" flex items-center mt-2 border-t-2 pt-6">
                              <button className="justify-center btn-secondary w-full flex font-bold text-lg" onClick={handleLogOut}>Logout</button>
                           </li>
                        </ul>
                     </div>
                     :
                     <Link to="/login">
                        <button className="btn btn-outline btn-secondary">Login</button>
                     </Link>
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;