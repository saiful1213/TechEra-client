import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import { FcGoogle } from "react-icons/fc"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
   const { signinwithemailpass, signinwithGoogle } = useContext(AuthContext)
   const navigate = useNavigate();
   const location = useLocation();
   console.log(location)

   const handleLogin = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signinwithemailpass(email, password)
         .then(res => {
            form.reset();
            console.log(res.user)
            toast('succesfully logged in')
            navigate(location?.state ? location.state : '/');
         })
         .catch(toast.error('invalid login credintial'))
   }

   const handleGoogleSignIn = () => {
      signinwithGoogle()
         .then(result => {
            navigate(location?.state ? location.state : '/');
            console.log(result.user)
            toast('succesfully logged in')
         })
         .catch(error => {
            toast.error(error.message)
         })
   }

   return (
      <div className="max-w-7xl mx-auto">
         <Navbar2></Navbar2>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col">
               <h1 className="text-3xl font-bold mb-3">Please Login</h1>
               <div className="card flex-shrink-0 w-[400px] max-w-lg shadow-2xl bg-base-100">
                  <form className="card-body" onSubmit={handleLogin}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                     </div>
                     <Link to="/register"><p className="text-blue-500 font-medium text-right my-2 hover:underline">Create An Account</p></Link>
                  </form>
                  <p className="text-center font-medium">Or</p>
                  <h1 className="font-medium text-lg p-8 flex items-center gap-8">sign in with
                     <button className="btn btn-active btn-ghost" onClick={handleGoogleSignIn}>
                        <FcGoogle size={'1.5rem'} />
                        Google
                     </button>
                  </h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;