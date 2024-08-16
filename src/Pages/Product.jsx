import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";

const Product = () => {
    const { user, logOut } = useAuth();

    const handleSignOut = () => {
        logOut();
    };

    return (
        <div>
            <Helmet>
                <title>ShowcasePro || Product</title>
            </Helmet>
            {user && (
                <div className="flex items-center justify-end gap-2">
                    <h2>
                        {user?.email}
                    </h2>
                    <button className="bg-white border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                        onClick={handleSignOut} 
                       >
                        LogOut
                    </button>
                </div>
            )}

            <div>
                
            </div>

        </div>
    );
};

export default Product;
