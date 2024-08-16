import { Link, } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {

    const { user, logOut } = useAuth()
   
    const handleSignOut = () => {
        logOut()

    }

    
    return (
        <div className="navbar bg-base-100 shadow-md mb-5">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl "><span className="font-bold text-pink-500 -mr-2">Showcase</span>Pro</Link>
            </div>
           
            <div className="navbar-end">

                {user ? (
                     <div className="flex items-center justify-end gap-2 mb-4">
                     <h2>{user?.email}</h2>
                     <button
                         className="bg-white border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                         onClick={handleSignOut}
                     >
                         Log Out
                     </button>
                 </div>
                ) : (
                    <>
                       <Link to="/signUp">
                       <button
                         className="bg-white border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                     >
                         SignUp
                     </button>
                       </Link>
                    </>
                )}
               
            </div>
        </div>
    );
};

export default Navbar;