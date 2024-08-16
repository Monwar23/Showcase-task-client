import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const SignUp = () => {
    const { createUser,user,loading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/product')
        }
    },[navigate,user])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const { email, password, } = data;

        if (
            !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
        ) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration successful!");

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/product')
                }, 3000)


            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }
    if(user || loading) return
    return (
        <div>
            <Helmet>
                <title>ShowcasePro || SignUp</title>
            </Helmet>
            <div className="flex items-center justify-center">
                <div className="border border-pink-500 px-10 py-5 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-extrabold mb-8 text-black text-center">Sign Up Now !</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                {...register("Name", { required: true })}
                            />
                            {errors.Name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-8">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-white border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="mt-5 text-center text-gray-500">
                        Already have an account?{" "}
                        <Link to="/"
                            className="text-pink-500 hover:text-pink-700 font-bold"

                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default SignUp;
