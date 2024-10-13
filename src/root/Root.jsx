import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-slate-400" >
            <Navbar ></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;