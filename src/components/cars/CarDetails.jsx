
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

import { assets, dummyCarData } from "../../assets/all-assets/assets.js";


// dollar currency import 

const currency = import.meta.env.VITE_CURRENCY;

// react spinner 

import {FadeLoader} from "react-spinners";


export default function CarDetails() {
    const [cardetails, setCardetails] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        let desiredCar = null;

        setTimeout(() => {
            desiredCar = dummyCarData.find(car => car._id == id);
            // console.log("car details are", desiredCar);
            setCardetails(desiredCar);

        }, [2000]);

    }, []);


    const handleGobackAction = () => {
        if (window.history.length > 2) {
            navigate(-1)
        }

        else {
            navigate("/cars");
        }
    }

    return (

        <>
            <section>
                {/* parent div  */}
                <div className="p-12 max-md:p-6 
                    max-md:min-h-[34vh] ">

                    {/* go back button  */}
                    <div className=" font-outfit text-[#6A7282] font-[400] h-8 flex items-center
                        xl:mb-4 
                        max-md:mb-4" onClick={handleGobackAction} >
                        <img src={assets.arrow_icon} alt="" className=" mr-4 " style={{ transform: "rotateY(180deg)" }} />
                        <button>Back to all cars</button>
                    </div>

                    {
                        (cardetails) ? <div className="  flex justify-around max-md:flex-col ">

                            {/* left div  */}
                            <div className=" xl:w-[60%]  " >

                                {/* car image and model  */}

                                <div className=" mb-4 font-outfit " >
                                    {/* car image  */}
                                    <div className=" w-full border-1 overflow-hidden border-black rounded-[27px]">
                                        <img src={cardetails.image} alt="car image" className=" w-full " />
                                    </div>

                                    {/* model number  */}
                                    <div className=" max-md:mt-4 " >
                                        <p className=" text-[#1E2939] font-[600] 
                                            xl:text-[2.2rem] "> {`${cardetails.brand} ${cardetails.model}`} </p>
                                        <p className=" xl:text-[1.2rem] font-[400] text-[#6A7282] " >{` ${cardetails.year} - ${cardetails.category} `}</p>
                                    </div>
                                </div>

                                <hr className=" bg-[#D1D5DC] " />

                                {/* other specification and escription  */}

                                <div className=" font-roboto mt-4 " >
                                    {/* specifications  */}
                                    <div className=" flex justify-around font-[500] 
                                        max-md:grid grid-cols-2 max-md:text-[0.8rem] ">

                                        <div className=" bg-[#F3F4F6] p-6 rounded-lg flex flex-col justify-center items-center 
                                            max-md:p-2 max-md:w-[90%] max-md:mt-4 ">

                                            <img src={assets.users_icon} alt="" className=" w-6  " />
                                            <p>{`${cardetails.seating_capacity} Seats`}</p>
                                        </div>

                                        <div className=" bg-[#F3F4F6] p-6 rounded-lg flex flex-col justify-center items-center 
                                            max-md:p-2 max-md:w-[90%] max-md:mt-4 ">

                                            <img src={assets.fuel_icon} alt="" className=" w-6  " />
                                            <p> {` ${cardetails.fuel_type}`} </p>
                                        </div>

                                        <div className=" bg-[#F3F4F6] p-6 rounded-lg flex flex-col justify-center items-center 
                                            max-md:p-2 max-md:w-[90%] max-md:mt-4 ">

                                            <img src={assets.carIcon} alt="" className=" w-8  " />
                                            <p> {` ${cardetails.transmission}`} </p>
                                        </div>

                                        <div className=" bg-[#F3F4F6] p-6 rounded-lg flex flex-col justify-center items-center 
                                            max-md:p-2 max-md:w-[90%] max-md:mt-4 ">

                                            <img src={assets.location_icon} alt="" className=" w-6  " />
                                            <p> {` ${cardetails.location}`} </p>
                                        </div>

                                    </div>

                                    {/* description  */}
                                    <div className=" mt-5 " >
                                        <h1 className=" font-[500] text-[1.8rem] " >Description</h1>
                                        <p className=" text-[#64748B] text-[0.9rem] " >{`${cardetails.description}`}</p>
                                    </div>

                                    {/* features  */}
                                    <div className=" mt-5" >

                                        <h1 className=" text-[1.8rem] " >Features</h1>

                                        <div className="grid grid-cols-2 items-center mt-3 text-[#64748B] font-[400] 
                                            max-md:text-[0.9rem] ">
                                            <div className=" mb-4 " >
                                                <img src={assets.check_icon} alt="" className=" inline-block me-2 " />
                                                <p className=" inline-block " > Leather Seats </p>
                                            </div>

                                            <div className=" mb-4 " >
                                                <img src={assets.check_icon} alt="" className=" inline-block me-2 " />
                                                <p className=" inline-block " >Panoramic Sunroof</p>
                                            </div>

                                            <div className=" mb-4 " >
                                                <img src={assets.check_icon} alt="" className=" inline-block me-2 " />
                                                <p className=" inline-block " >Wireless Charging</p>
                                            </div>

                                            <div className=" mb-4 " >
                                                <img src={assets.check_icon} alt="" className=" inline-block me-2 " />
                                                <p className=" inline-block " >360 Camera</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* right right  */}
                            <div className="font-outfit w-[30%] h-[70%] border-2 rounded-lg sticky top-8 
                                max-md:w-[90%] max-md:m-auto max-md:mt-12 " style={{boxShadow : "0 10px 15px #0000001A"}} >
                                <form>
                                    <div className=" font-[500] p-8 " >
                                        {/* rent of the car  */}
                                        <div className=" flex justify-between items-center mb-4" >
                                            <p className="font-[600] text-[2rem] ">{ ` ${currency} ${cardetails.pricePerDay} ` }</p>
                                            <p className=" text-[#6A7282] text-[1.3rem] " >per day</p>
                                        </div>

                                        <hr className="text-[#D1D5DC]"/>

                                        {/* pickup and return date  */}
                                        <div className=" mt-8 text-center " >
                                            <p className="text-[1.7rem] mb-5 ">Pickup Date</p>
                                            <input type="date" className=" bg-transparent border-2 border-gray-400 rounded-2xl p-5" style={{boxShadow : "0 0 15px gray"}} />

                                            <p className="text-[1.7rem] my-5 ">Return Date</p>
                                            <input type="date" className=" bg-transparent border-2 border-gray-400 rounded-2xl p-5" style={{boxShadow : "0 0 15px gray"}} />
                                        </div>

                                        {/* book now button and other things..  */}
                                        <div className=" w-[80%] m-auto mt-4 text-white " >
                                            <button className=" bg-[#2563EB] w-full p-3 rounded-xl " >Book Now</button>
                                        </div>

                                        {/* offers  */}
                                        <div className=" text-center mt-4 " >
                                            <p className=" text-[#6A7282] " > No credit card required to reserve</p>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                        :

                        <FadeLoader className=" m-auto mt-16 
                           max-md:mt-[7rem] " />
                            
                    }

                </div>
            </section>

        </>

    );
}
