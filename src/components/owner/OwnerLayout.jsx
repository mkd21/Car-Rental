
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

import OwnerNavbar from "./ownerNav/OwnerNavbar.jsx";

export default function OwnerLayout() {
    return (
        <>
            <OwnerNavbar/>
            <div className=" flex" >
                <SideBar />
                <Outlet />
            </div>
        </>
    );
}