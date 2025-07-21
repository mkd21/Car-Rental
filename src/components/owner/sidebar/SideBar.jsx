import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ownerMenuLinks, dummyUserData } from "../../../assets/all-assets/assets.js";

// Example arrow icon. Replace with your own SVG/file if you want.
function ArrowIcon({ className }) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32">
            <path d="M12 8l8 8-8 8" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    );
}

export default function SideBar() {
    const [image, setImage] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false); // NEW
    const sidebarRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // Image src logic
    let imgSrc;
    if (image) {
        imgSrc = URL.createObjectURL(image);
    } else if (dummyUserData.image) {
        imgSrc = dummyUserData.image;
    } else {
        imgSrc = "/path/to/default/image.png";
    }

    // Click-away handler to close mobile sidebar
    useEffect(() => {
        if (!sidebarOpen) return;
        function handleClick(e) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                !(e.target.classList.contains("sidebar-toggle-btn"))
            ) {
                setSidebarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [sidebarOpen]);

    // Sidebar classes (Tailwind utilities)
    const sidebarBase =
        "font-outfit flex flex-col items-center border-e-2 bg-white h-full z-50 transition-transform duration-300 ease-in-out w-[75vw] max-w-[320px] sm:w-[50vw] max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:h-full";
    const sidebarOpenClass = "max-sm:translate-x-0";
    const sidebarClosedClass = "max-sm:-translate-x-full";

    return (
        <>
            {/* --- Mobile menu button --- */}
            <button
                className="sidebar-toggle-btn fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow border md:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
                type="button"
            >
                <ArrowIcon className="rotate-180 text-gray-700" />
            </button>

            {/* --- Overlay for mobile --- */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    aria-label="Sidebar overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* --- Sidebar --- */}
            <div
                ref={sidebarRef}
                className={`${sidebarBase} ${sidebarOpen ? sidebarOpenClass : sidebarClosedClass
                    } max-sm:shadow-xl max-sm:rounded-r-2xl max-md:hidden:translate-x-0 w-[15%] md:relative md:translate-x-0`}
            // ^ on desktop, always show (md:relative, md:translate-x-0). On small screens, slide in/out.
            >
                {/* Out-close arrow in mobile sidebar */}
                <button
                    className="sidebar-toggle-btn absolute top-4 right-4 md:hidden bg-white p-2 rounded-full shadow border"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                    type="button"
                >
                    <ArrowIcon className="text-gray-700" />
                </button>

                {/* user image */}
                <div
                    className="relative w-24 h-24 group cursor-pointer my-4"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                    <img
                        src={imgSrc}
                        alt="User"
                        className="w-full h-full object-cover rounded-full border border-gray-300"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-white">
                        Change
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                </div>

                <div className="text-[1.2rem]">
                    <p>{image ? "Welcome,User" : dummyUserData.name}</p>
                </div>

                {/* menu paths  */}
                <div className="mt-[1.2rem] font-inter text-[#6B6B6B] font-[500] w-full">
                    {ownerMenuLinks.map((iter) => (
                        <div className="text-[1.2rem] mt-4 " key={iter.name}>
                            <NavLink
                                to={iter.path}
                                end={iter.path === "/owner"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-[#DFEAFF80] text-[#2563EB] inline-block w-full py-2"
                                        : "inline-block w-full py-2 "
                                }
                                onClick={ () => (window.innerWidth < 768) && setSidebarOpen(false)  }
                            >
                                {({ isActive }) => (
                                    <>
                                        <img
                                            src={isActive ? iter.coloredIcon : iter.icon}
                                            alt={`${iter.name} image`}
                                            className="inline-block"
                                        />
                                        <p className="inline-block ms-3 ">{iter.name}</p>
                                    </>
                                )}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
