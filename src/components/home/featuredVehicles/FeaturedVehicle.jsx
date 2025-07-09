
import CarsCard from "./CarsCard.jsx";
import { assets } from "../../../assets/all-assets/assets.js";

const featuredCars = [
    {id : 1 , carImage : assets.car_image1}, 
    {id : 3 , carImage : assets.car_image3}, 
    {id : 5 , carImage : assets.car_image5}
];

export default function FeaturedVehicle() {
    return (
        <>

            {/* featured vehicles section  */}

            <section>

                {/* parent div  */}
                <div className="" >

                    <div className="xl:w-[80%] m-auto text-center xl:mt-[5rem] ">
                        <h1 className="text-[#414141] font-[600] xl:text-[2.9rem]">Featured Vehicles</h1>
                        <p className="text-[#414141CC] font-[400] xl:text-[1.5rem]">Explore our selection of premium vehicles available for your next adventure.</p>
                    </div>

                    {/* cars card  */}
                    <div className="flex max-md:flex-col xl:justify-around xl:mt-[5rem] ">
                        {
                            featuredCars.map( (iter , index) => <CarsCard key={index} data = {iter} /> )
                        }
                    </div>

                    <div>

                    </div>

                </div>

            </section>
        </>
    );
}