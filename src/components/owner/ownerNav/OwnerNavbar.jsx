
import { Link } from "react-router-dom";
import { assets , dummyUserData } from "../../../assets/all-assets/assets.js";


export default function OwnerNavbar() {


    return (
        <>
            <section className="relative z-50 flex justify-around items-center bg-light max-xl:h-[4rem] xl:h-[8vh] border-b-2 border-b-[#C1C1C180]
                xl:justify-between xl:px-[6rem] ">

                {/* LOGO */}
                <div className="max-md:w-[30%]" >
                    <Link to="/">
                        <img src={assets.logo} alt="company logo" />
                    </Link>
                </div>

                <div className=" font-outfit font-[600] text-[#64748B] text-[0.8rem] xl:text-[1.2rem] " >
                    <p>{` Welcome, ${dummyUserData.name}`}</p>
                </div>
            </section>

        </>
    );
}
