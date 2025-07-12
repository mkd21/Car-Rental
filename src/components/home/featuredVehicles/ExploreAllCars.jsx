
import { useNavigate } from "react-router-dom";

import { assets } from "../../../assets/all-assets/assets.js";

export default function ExploreAllCars() {

    const navigate = useNavigate();

    return (
        <button onClick={ () => navigate("/cars") }  className=" text-[1.4rem] w-full h-full font-[500] rounded-[19px] xl:p-4 " style={{border : "3px solid #BCC5DE80"}} >
            Explore all cars
            <img className=" inline-block ms-4 " src={assets.arrow_icon} alt="arrow icon" />
        </button>
    );
}