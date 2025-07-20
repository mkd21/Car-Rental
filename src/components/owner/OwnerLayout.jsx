
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";



export default function OwnerLayout()
{
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    );
}