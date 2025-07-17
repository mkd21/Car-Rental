
import Navbar from "./components/common-navbar-footer/Navbar.jsx";
import Footer from "./components/common-navbar-footer/Footer.jsx";


import { Outlet } from "react-router-dom";

import ScrollTop from "./utils/ScrollTop.jsx";

export default function AppOutlet()
{
    return (
        <>
            <ScrollTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}