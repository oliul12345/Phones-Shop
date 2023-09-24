import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Comphonents/Header/Navbar";
import { useEffect } from "react";



const MainLayout = () => {
    const loc = useLocation();

    useEffect(()=>{
        console.log(loc.pathname);
        document.title = `Phone ${loc.pathname.replace("/", "-")}`
    },[loc.pathname])
    return (
        <div>
           <div className="max-w-7xl mx-auto">
              <Navbar></Navbar>
              <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;