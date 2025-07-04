
import { Link } from "react-router";

import { assets, menuLinks } from "../../assets/all-assets/assets.js";

export default function Navbar() {
    return (
        <>
            <section className=" flex justify-around items-center bg-light xl:h-[8vh]" >
                <div>
                    <Link to="/"> <img src={assets.logo} alt="company logo" /> </Link>
                </div>

                <div className="flex justify-around xl:w-[35%] text-navText font-[500] ">
                    {
                        menuLinks.map((iter, index) => <Link key={index} to={iter.path} >{iter.name}</Link>)
                    }

                    <div className="flex rounded-full border-2 xl:px-2  ">
                        <input type="text" className=" bg-transparent focus:outline-none font-[400] " placeholder="Search products" />
                        <img src={assets.search_icon} alt="search icon" className=" hover:cursor-pointer " />
                    </div>
                </div>

                <div className="" >
                    <button className="font-[400]" >Dashboard</button>
                    <button>Login</button>
                </div>

            </section>
        </>
    );
}