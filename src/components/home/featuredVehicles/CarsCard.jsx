
import { useNavigate } from "react-router-dom";

import { assets } from "../../../assets/all-assets/assets.js";

export default function CarsCard({ _id, owner, brand, model, image, year, category, seating_capacity, fuel_type, transmission, pricePerDay, location, description, isAvaliable, createdAt }) {

    const navigate = useNavigate();
    return (
        <>
            {/* car image  */}
            <div onClick={ () => navigate(`/car-details/${_id}`) }  className="rounded-[24px] overflow-hidden hover:cursor-pointer 
                xl:w-[23rem] xl:pb-4 xl:h-[24rem] xl:mb-[3rem]
                max-md:mb-[3rem]
                " style={{boxShadow : "0 10px 15px #0000001A"}} >

                {/* car image  */}
                <div className=" max-md:h-[35vh] xl:h-[60%]" >
                    <img src={image} alt="car image" 
                        className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110 " />
                </div>

                {/* car details  */}
                <div className="xl:w-[90%] max-md:w-[85%] m-auto font-outfit ">

                    <div className=" max-md:mt-4 xl:my-4 ">
                        <p className=" text-[#000000] font-[500] text-[1.5rem]">{` ${brand} ${model}`}</p>
                        <p className="text-[#4A5565]" >{ `${category} ${year}`}</p>
                    </div>

                    {/* other specifications  */}
                    <div className=" text-[#4A5565] grid grid-cols-2 xl:text-[1.1rem] max-md:my-4  " >

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 " src={assets.users_icon} alt="car sitting capacity image" />
                            <p className=" inline-block font-[400]" >{seating_capacity} Seats</p>
                        </div>

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 "src={assets.fuel_icon} alt="" />
                            <p className=" inline-block font-[400] xl:me-8 ">{fuel_type}</p>
                        </div>

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 " src={assets.carIcon} alt="" />
                            <p className=" inline-block font-[400]">{transmission}</p>
                        </div>

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 " src={assets.location_icon} alt="" />
                            <p className=" inline-block font-[400]">{location}</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}