import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites/Favorites";
import LogIn from "../Pages/LogIn/LogIn";
import ErrorPage from "../Pages/ErrrorPage/ErrorPage";
import ShowPhone from "../Pages/ShowPhone/ShowPhone";

const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/Phones.json')
            },
            {
                path:"/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/phone/:id",
                element:<ShowPhone></ShowPhone>,
                loader: () => fetch("/Phones.json")
            }
        ]
        
    }
])
export default myCreateRoute;