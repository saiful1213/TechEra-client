import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const Register = () => {
   const { signupwithemailpass, signinwithGoogle } = useContext(AuthContext)
   const navigate = useNavigate();

   const handleRegister = e => {
      e.preventDefault();
      const form = e.target
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const img = form.img.value;

      if (password.length < 6) {
         return toast.error('password should be at least 6 charecters or more')
      }

      if (!/^(?=.*[!@#$%^&*])(?=.*[A-Z])/.test(password)) {
         return toast.error('password should have at least one special charecter and one uppercase')
      }

      signupwithemailpass(email, password)
         .then(result => {
            updateProfile(result.user, {
               displayName: name,
               photoURL: img
            })
            toast.success('user created succesfully!')
            navigate('/')
            location.reload();
         })
         .catch(error => {
            console.log(error.message)
            toast.error(error.message)
         })
   }

   const handleGoogleSignIn = () => {
      signinwithGoogle()
         .then(result => {
            console.log(result.user)
            toast('succesfully signed up')
            navigate('/');
         })
         .catch(error => {
            console.log(error.message)
            toast.error(error.message)
         })
   }

   return (
      <div className="max-w-7xl mx-auto">
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col">
               <h1 className="text-3xl font-bold mb-3">Please Register</h1>
               <div className="card flex-shrink-0 w-full lg:w-[400px] max-w-lg shadow-2xl bg-base-100">
                  <form className="card-body" onSubmit={handleRegister}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                     </div>
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
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="img" placeholder="photo url" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-secondary">Register</button>
                     </div>
                     <p className="mt-3">
                        Already have an account? please
                        <Link to="/login"><span className="text-blue-500 font-medium hover:underline ml-3">login here</span></Link>
                     </p>
                  </form>
                  <p className="text-center font-medium">Or</p>
                  <h1 className="font-medium text-lg p-8 flex items-center gap-8">sign up with
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

export default Register;