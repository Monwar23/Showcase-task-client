import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-extrabold mb-8 text-black text-center">Login Now !</h2>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-white border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-center text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/signUp"
                        className="text-pink-500 hover:text-pink-700 font-bold"
                        
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
