


export default function CarsCard({ carImage, Car_Sitting_capacity, fuelType, transmission_Type, car_Location }) {

    return (
        <>
            {/* car image  */}
            <div className="rounded-[24px] overflow-hidden 
                xl:w-[22rem] xl:pb-4  
                max-md:mb-[3rem]
                " style={{boxShadow : "0 10px 15px #0000001A"}} >

                {/* car image  */}
                <div className=" xl:h-[60%]" >
                    <img src={carImage} alt="car image" className=" xl:w-full xl:h-full " />
                </div>

                {/* car details  */}
                <div className="xl:w-[90%] max-md:w-[85%] m-auto font-outfit ">

                    <div className=" max-md:mt-4 xl:my-4 ">
                        <p className=" text-[#000000] font-[500] text-[1.5rem]">BMW X5</p>
                        <p className="text-[#4A5565]" >SUV 2022</p>
                    </div>

                    <div className=" text-[#4A5565] flex flex-wrap justify-between xl:text-[1.5rem] max-md:my-4  " >

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 " src={Car_Sitting_capacity} alt="car sitting capacity image" />
                            <p className=" inline-block font-[400]" >5 Seats</p>
                        </div>

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 "src={fuelType} alt="" />
                            <p className=" inline-block font-[400] xl:me-8 ">  Gasoline</p>
                        </div>

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 " src={transmission_Type} alt="" />
                            <p className=" inline-block font-[400]">  Automatic</p>
                        </div>

                        <div className=" max-md:w-[7rem] " >
                            <img className=" inline-block xl:w-[1.1rem] me-2 " src={car_Location} alt="" />
                            <p className=" inline-block font-[400]"> Los Angeles</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}