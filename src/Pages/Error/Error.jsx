import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="flex justify-center items-center h-screen">
         <div>
            <h1 className="font-bold text-3xl mb-6">Oopps. something is wrong !!</h1>
            <Link to={-1}><button className="btn btn-error mx-auto block">Go Back</button></Link>
         </div>
      </div>
   );
};

export default Error;