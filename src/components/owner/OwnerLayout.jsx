
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";



export default function OwnerLayout() {
    return (
        <>
            <div className=" flex" >
                <SideBar />
                <Outlet />
            </div>
        </>
    );
}