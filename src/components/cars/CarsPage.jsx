
import { useEffect, useState } from "react";
import {assets} from "../../assets/all-assets/assets.js";

import { dummyCarData } from "../../assets/all-assets/assets.js";
import CarsCard from "../home/featuredVehicles/CarsCard.jsx";

export default function CarsPage()
{
    const [inputData , updateData] = useState("");

    const handleChange = (receivedData) => updateData(receivedData);
    
    return (

        <section>

            {/* top section div with heading and search bar  */}
            <div className=" bg-[#F1F5F9] mt-16 pb-16 " >
                {/* heading  */}
                <div className=" w-[60%] mx-auto max-md:w-[80%] ">
                    <h1 className=" text-[2.2rem] font-[600] text-center font-roboto pt-16 " >Available Cars</h1>
                    <p className="text-[#64748B] text-[1.2rem] text-center font-outfit pt-4 ">Browse our selection of premium vehicles available for your next adventure</p>
                </div>

                <div className="text-[#64748B] border-[#E2E8F0] border-2 rounded-full font-outfit w-[50%] mx-auto mt-8
                    relative max-md:w-[90%] " 
                    style={{ boxShadow : "0 1px 2px #0000000D" }}  
                >
                    <input type="text" placeholder="Search by make, model, or features" 
                        className="placeholder:font-outfit w-[90%] p-4 outline-none bg-transparent
                            placeholder:text-[0.9rem] " 
                        value={inputData}
                        onChange={ (e) => handleChange(e.target.value) }
                    />
                    <img src={assets.search_icon} alt="search icon" className=" hover:cursor-pointer absolute top-[20%] left-[90%] w-8 
                       max-md:w-[1.8rem] max-md:left-[86%] max-md:top-[25%] " />
                </div>
            </div>


            {/* all cars section  */}
            <div className="px-12 mt-12 " >
                
                {/* count of cars shown  */}
                <div className=" text-[#6A7282] font-[400] font-outfit max-md:text-[1.2rem] text-[1.6rem] mb-4 ">
                    <p>Showing {dummyCarData.length} Cars</p>
                </div>

                <div className="flex flex-wrap justify-between max-md:flex-col  " >
                    {
                        dummyCarData.map( (iter) => <CarsCard key={iter._id} {...iter}  /> )
                    }
                </div>
            </div>

        </section>
    );
}