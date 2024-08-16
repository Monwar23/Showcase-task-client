import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Login = () => {

    const { signIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful!");

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 3000)

            })
            .catch(error => {
                console.log(error);
                toast.error('Email or password not found')
            })
    }

    return (
        <div>
            <Helmet>
                <title>ShowcasePro || Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-extrabold mb-8 text-black text-center">Login Now !</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
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
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
