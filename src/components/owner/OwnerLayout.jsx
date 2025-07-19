
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";

export default function OwnerLayout()
{
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    );
}