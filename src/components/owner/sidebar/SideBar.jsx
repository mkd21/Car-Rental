import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ownerMenuLinks } from "../../../assets/all-assets/assets.js";
import { assets } from "../../../assets/all-assets/assets.js";

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
    } else if (assets.user_profile) {
        imgSrc = assets.user_profile; // Should be a URL string
    } else {
        imgSrc = "/path/to/default/image.png";
    }

    return (

        <section>
            <div className=" bg-yellow-300 " >

                {/* user image  */}
                <div
                    className="relative w-24 h-24 group cursor-pointer"
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

                {/* menu paths  */}
                <div>
                    {ownerMenuLinks.map((iter) => (
                        <NavLink key={iter.name} to={iter.path}>
                            {iter.name}
                        </NavLink>
                    ))}
                </div>

            </div>
        </section>
    );
}
