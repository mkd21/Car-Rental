

import { Link , useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../../assets/all-assets/assets.js";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, updateMenuState] = useState(false);

    const navigate = useNavigate();

    const handleMenuDisplay = () => updateMenuState(!isMenuOpen);

    return (
        <>
            <section className="relative z-50 flex justify-around items-center bg-light max-xl:h-[4rem] xl:h-[8vh] border-b-2 border-b-[#C1C1C180]">

                {/* LOGO */}
                <div className="max-md:w-[30%]" >
                    <Link to="/">
                        <img src={assets.logo} alt="company logo" />
                    </Link>
                </div>

                {/* MOBILE MENU */}
                <div className={`bg-light text-center flex max-md:flex-col xl:flex-row xl:static xl:max-h-none xl:opacity-100 xl:pt-0 xl:pb-0 xl:items-center xl:justify-around xl:w-[65%] xl:pointer-events-auto text-navText font-[500]
                                max-md:absolute max-md:top-[4rem] max-md:w-full  transition-all duration-500 ease-in-out overflow-hidden
                    ${isMenuOpen ? "max-h-[40rem] opacity-100 pt-4 pb-8" : "max-h-0 opacity-0 pointer-events-none"}
                `}>
                    {menuLinks.map((iter, index) => (
                        <Link key={index} to={iter.path} className="max-md:my-[0.2rem] xl:mx-8 " onClick={() => updateMenuState(false)}>
                            {iter.name}
                        </Link>
                    ))}

                    {/* Search input */}
                    <div className="flex rounded-full border-2 xl:px-2 max-md:w-[60%] max-md:ps-[1rem] m-auto max-md:my-4 xl:py-[0.3rem] ">
                        <input type="text" className="bg-transparent focus:outline-none font-[400] max-md:w-[85%]" placeholder="Search products" />
                        <img src={assets.search_icon} alt="search icon" className="hover:cursor-pointer" />
                    </div>

                    {/* Buttons */}
                    <div className="flex max-md:flex-col max-md:w-[33%] m-auto xl:w-[25%] xl:justify-around ">
                        
                        <button className="font-[400] text-navText max-md:mb-[0.8rem]" onClick={ ()=> navigate("/owner") }>
                            Dashboard
                        </button>

                        <button className="bg-[#2563EB] text-white font-[500] xl:py-[0.4rem] xl:px-[1rem] rounded-lg">Login</button>
                    </div>
                </div>

                {/* Hamburger Icon */}
                <div className="max-md:[6rem] hover:cursor-pointer z-50 xl:hidden " onClick={handleMenuDisplay}>
                    {isMenuOpen ? (
                        <img src={assets.close_icon} alt="cross mark" />
                    ) : (
                        <img src={assets.menu_icon} alt="menu_openIcon" />
                    )}
                </div>
            </section>

            {/* Overlay to close on outside click */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => updateMenuState(false)}
                ></div>
            )}
        </>
    );
}
