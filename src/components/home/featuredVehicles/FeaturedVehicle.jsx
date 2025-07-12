
import CarsCard from "./CarsCard.jsx";
import { dummyCarData } from "../../../assets/all-assets/assets.js";
import ExploreAllCars from "./ExploreAllCars.jsx";


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
                    <div className="flex flex-wrap max-md:flex-col max-md:w-[80%] m-auto xl:justify-between xl:mt-[5rem] xl:w-[94%] ">
                        {
                            dummyCarData.map( (iter) => <CarsCard key={iter._id} {...iter} /> )
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