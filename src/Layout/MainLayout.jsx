import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
           <div className="h-20">
           <Navbar></Navbar>
           </div>
            <div className="min-h-[calc(100vh-290px)]">
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;