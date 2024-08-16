import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Product from "../Pages/Product";
import PrivateRoutes from "./PrivateRoutes";
import Root from "../Root/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/product",
                element: <PrivateRoutes><Product></Product></PrivateRoutes>
            }
        ]
    },
]);