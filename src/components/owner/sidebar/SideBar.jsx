import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { ownerMenuLinks, dummyUserData } from "../../../assets/all-assets/assets.js";

export default function SideBar() {

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // Choose the source: if image (File) exists, preview it; else, use assets.user_profile (which should be a string URL) or a default
    let imgSrc;
    if (image) {
        imgSrc = URL.createObjectURL(image);
    } else if (dummyUserData.image) {
        imgSrc = dummyUserData.image; // Should be a URL string
    } else {
        imgSrc = "/path/to/default/image.png";
    }



    return (

        <div className=" w-[15%] font-outfit flex flex-col items-center border-e-2 ">

            {/* user image  */}
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

            <div className=" text-[1.2rem] " >
                <p>{image ? "Welcome,User" : dummyUserData.name}</p>
            </div>

            {/* menu paths  */}
            <div className=" mt-[1.2rem] font-inter text-[#6B6B6B] font-[500] " >
                {ownerMenuLinks.map((iter) => (

                    <div className=" text-[1.2rem]" key={iter.name} >

                        <NavLink key={iter.name} to={iter.path} end={iter.path == "/owner"}
                            className={({ isActive }) => (isActive ? "bg-[#DFEAFF80] text-[#2563EB] inline-block w-full " : "")}>

                            {
                                ({ isActive }) => (
                                    <>
                                        <img src={isActive ? iter.coloredIcon : iter.icon} alt={`${iter.name} image`} className="inline-block" />
                                        <p className="inline-block ms-3 ">{iter.name}</p> 
                                    </>
                                )
                            }

                        </NavLink>

                    </div>

                ))}
            </div>

        </div>

    );
}
