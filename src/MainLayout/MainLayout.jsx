import { Outlet } from "react-router-dom";
import Navbar from "../Comphonents/Header/Navbar";



const MainLayout = () => {
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