
import { assets } from "../../assets/all-assets/assets.js";

const currency = import.meta.env.VITE_CURRENCY;

export default function BookedCarsCard({ carData, indexOfEachCar }) {

    const DateOfPickup = carData.pickupDate.split("T")[0].split("-");
    const DateOfDrop = carData.returnDate.split("T")[0].split("-");


    return (

        <div className=" font-outfit flex justify-around p-8 my-16 border-2 rounded-xl
            max-md:flex-col " >

            {/* left div for car image and other details  */}
            <div className=" flex
               max-md:flex-col ">

                {/* car image , model , location , year   */}
                <div >

                    <div className=" w-[80%] 
                        max-md:w-full" >
                        <img src={carData.car.image} alt="car image" className=" w-full rounded-2xl " />
                    </div>

                    <div className=" w-[80%] my-3
                        max-md:w-full  " >
                        <p className=" font-[600] text-[2rem] 
                           max-md:text-[1.5rem] " >{`${carData.car.brand} ${carData.car.model} `}</p>
                        <p className=" font-[400] text-[1.2rem] text-[#6A7282] 
                           max-md:text-[0.9rem] " > {` ${carData.car.year} • ${carData.car.category} • ${carData.car.location} `} </p>
                    </div>

                </div>

                {/* booking info  */}
                <div>
                    <p className=" inline-block bg-[#F3F4F6] mr-3 font-[400] p-[0.5rem] rounded-lg " > Booking #{indexOfEachCar + 1} </p>
                    <p className={`inline-block font-[500] p-[0.5rem] rounded-full ${(carData.status == "confirmed") ? " bg-[#BBFFD782] text-[#06A764] " : " bg-[#FFBBBC80] text-[#DA282B] "} `} >{carData.status}</p>

                    {/* rental period  */}
                    <div>
                        {/* calendar icon and rentel period text*/}
                        <div className=" mt-4" >
                            <img src={assets.calendar_icon_colored} alt="calendar icon" className=" inline-block mr-4 w-[1.5rem] " />
                            <p className=" inline-block text-[#1F2937A6] font-[400] text-[1.2rem] " >Rental Period</p>
                        </div>

                        {/* date from - to  */}
                        <div className=" ps-[2.4rem] font-[500] 
                           max-md:text-[0.9rem] max-md:font-[600] " >
                            <p> {`${DateOfPickup[2]} / ${DateOfPickup[1]} / ${DateOfPickup[0]} - ${DateOfDrop[2]} / ${DateOfDrop[1]} / ${DateOfDrop[0]}`} </p>
                        </div>
                    </div>

                    {/* pickup location  */}
                    <div>
                        {/* location icon and text  */}
                        <div className=" mt-4" >
                            <img src={assets.location_icon_colored} alt="location icon" className=" inline-block mr-4 w-[1.5rem] " />
                            <p className=" inline-block text-[#1F2937A6] font-[400] text-[1.2rem]">Pick-up Location</p>
                        </div>

                        {/* location name  */}
                        <div>
                            <p className=" ps-[2.4rem] font-[500]" >Airport Terminal 1</p>
                        </div>
                    </div>

                    {/* return location  */}
                    <div>
                        {/* location icon and text  */}
                        <div className=" mt-4" >
                            <img src={assets.location_icon_colored} alt="location icon" className=" inline-block mr-4 w-[1.5rem] " />
                            <p className=" inline-block text-[#1F2937A6] font-[400] text-[1.2rem]">Return Location</p>
                        </div>

                        {/* location name  */}
                        <div>
                            <p className=" ps-[2.4rem] font-[500]" >Downtown Office</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right div for total price of the booked car  */}
            <div className=" text-[#1F293799] font-[400] text-right
                 max-md:mt-8 max-md:text-center    " >
                <p className=" text-[1.5rem] " >Total Price</p>
                <p className=" text-[#2563EB] font-[600] text-[2rem] " >{` ${currency} ${carData.price} `}</p>
                <p className=" text-[1.2rem] " >{ `Booked on ${DateOfPickup[2]} / ${DateOfPickup[1]} / ${DateOfPickup[0]}`}</p>
            </div>

        </div>

    );
}