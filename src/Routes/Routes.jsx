import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    }
]);