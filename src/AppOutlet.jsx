
import Navbar from "./components/common-navbar-footer/Navbar.jsx";
import Footer from "./components/common-navbar-footer/Footer.jsx";


import { Outlet } from "react-router";

export default function AppOutlet()
{
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}