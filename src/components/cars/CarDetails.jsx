
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { assets, dummyCarData } from "../../assets/all-assets/assets.js";

export default function CarDetails() {
    const [cardetails, setCardetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        let desiredCar = null;

        setTimeout(() => {
            desiredCar = dummyCarData.find(car => car._id == id);
            console.log("car details are", desiredCar);
            setCardetails(desiredCar);

        }, [2000]);

    }, []);


    return (

        <>
            <section>
                {/* parent div  */}
                <div className=" bg-gray-300 p-12 " >

                    {/* go back button  */}
                    <div className=" font-outfit text-[#6A7282] font-[400] h-8 flex items-center
                        xl:mb-4 ">
                        <img src={assets.arrow_icon} alt="" className=" mr-4 " style={{ transform: "rotateY(180deg)" }} />
                        <button>Back to all cars</button>
                    </div>

                    {
                        (cardetails) ? <div className=" bg-yellow-200 flex justify-around ">

                            {/* left div  */}
                            <div className=" bg-orange-200 xl:w-[60%] font-outfit " >

                                {/* car image and model  */}

                                <div className=" mb-4 " >
                                    {/* car image  */}
                                    <div className=" w-full border-1 overflow-hidden border-black rounded-[27px]">
                                        <img src={cardetails.image} alt="car image" className=" w-full " />
                                    </div>

                                    {/* model number  */}
                                    <div>
                                        <p className=" text-[#1E2939] font-[600] 
                                            xl:text-[2.2rem] "> {`${cardetails.brand} ${cardetails.model}`} </p>
                                        <p className=" xl:text-[1.2rem] font-[400] text-[#6A7282] " >{` ${cardetails.year} - ${cardetails.category} `}</p>
                                    </div>
                                </div>

                                <hr className=" bg-[#D1D5DC] " />

                                {/* other specification and escription  */}

                                <div className="  " >
                                    {/* specifications  */}
                                    <div className=" bg-gray-300 " >
                                        <div>
                                            <img src={assets.users_icon} alt="" />
                                            <p>{`${cardetails.seating_capacity} Seats`}</p>
                                        </div>
                                        <div>
                                            <img src={assets.fuel_icon} alt="" />
                                            <p> {` ${cardetails.fuel_type}`} </p>
                                        </div>
                                        <div>
                                            <img src={assets.carIcon} alt="" />
                                            <p> {` ${cardetails.transmission}`} </p>
                                        </div>
                                        <div>
                                            <img src={assets.location_icon} alt="" />
                                            <p> {` ${cardetails.location}`} </p>
                                        </div>
                                    </div>

                                    {/* description  */}
                                    <div>
                                        <p>Description</p>
                                        <p>{`${cardetails.description}`}</p>
                                    </div>

                                    {/* features  */}
                                    <div>
                                        <div>
                                            <p> Leather Seats </p>
                                        </div>

                                        <div>
                                            <p>Panoramic Sunroof</p>
                                        </div>

                                        <div>
                                            <p>Wireless Charging</p>
                                        </div>

                                        <div>
                                            <p>360 Camera</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* right right  */}
                            <div className=" bg-pink-300 " >
                                <h1>Car booking form</h1>
                            </div>

                        </div>

                            :

                            <div>
                                <h1>Loading Car Details..</h1>
                            </div>
                    }

                </div>
            </section>

        </>

    );
}
