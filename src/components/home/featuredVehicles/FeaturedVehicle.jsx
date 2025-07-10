
import CarsCard from "./CarsCard.jsx";
import { assets } from "../../../assets/all-assets/assets.js";
import ExploreAllCars from "./ExploreAllCars.jsx";

const featuredCars = [
    {id : 1 , carImage : assets.car_image1 , Car_Sitting_capacity : assets.users_icon , fuelType : assets.fuel_icon , transmission_Type : assets.carIcon , car_Location : assets.location_icon}, 
    {id : 3 , carImage : assets.car_image3 , Car_Sitting_capacity : assets.users_icon , fuelType : assets.fuel_icon , transmission_Type : assets.carIcon , car_Location : assets.location_icon}, 
    {id : 5 , carImage : assets.car_image5 , Car_Sitting_capacity : assets.users_icon , fuelType : assets.fuel_icon , transmission_Type : assets.carIcon , car_Location : assets.location_icon}
];

export default function FeaturedVehicle() {
    return (
        <>

            {/* featured vehicles section  */}

            <section>

                {/* parent div  */}
                <div className=" max-md:mt-[3rem] " >

                    <div className=" max-md:w-[77%] max-md:mb-[3rem] xl:w-[80%] m-auto text-center xl:mt-[5rem] ">
                        <h1 className="text-[#414141] font-[600] max-md:text-[2.4rem] xl:text-[2.9rem]">Featured Vehicles</h1>
                        <p className="text-[#414141CC] font-[400] max-md:text-[1.4rem] xl:text-[1.5rem]">Explore our selection of premium vehicles available for your next adventure.</p>
                    </div>

                    {/* cars card  */}
                    <div className="flex max-md:flex-col max-md:w-[80%] m-auto xl:justify-around xl:mt-[5rem] ">
                        {
                            featuredCars.map( (iter , index) => <CarsCard key={index} {...iter} /> )
                        }
                    </div>
                    
                    <div className="m-auto max-md:w-[70%] xl:w-[20%] xl:mt-[3rem] " >
                        <ExploreAllCars />
                    </div>
                </div>

            </section>
        </>
    );
}