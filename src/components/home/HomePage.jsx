
import { useState } from "react";

import { cityList } from "../../assets/all-assets/assets.js";

export default function HomePage() {

    const [pickupLocation, updateLocation] = useState("");
    const [pickupDate , setPickupDate] = useState("");
    const [returnData , setReturnDate] = useState("");


    const today = new Date().toLocaleDateString("en-CA");

    console.log(today);

    return (
        <>
            <section className=" bg-light">

                <div>
                    <div>
                        <h1 className="text-[2rem]" >Luxury Cars On Rent</h1>
                    </div>

                    {/* form div  */}

                    <div className="bg-yellow-200 max-md:w-[70%] m-auto">

                        <form className=" flex max-md:flex-col max-md:items-center">

                            <div className="" >

                                <label className="block mb-1 font-medium">Pickup Location</label>
                                <select name="" id="" onChange={(e) => updateLocation(e.target.value)} >
                                    <option value="">Pickup Location</option>
                                    {
                                        cityList.map((currentCity, index) => <option key={index} value={currentCity} >{currentCity}</option>)
                                    }
                                </select>
                            </div>

                            {/* pickup date  */}
                            <div className="" >

                                <label className="block mb-1 font-medium" >Pick-up Date</label>
                                <input type="date" name="pickup-date" min={today} value={pickupDate}  onChange={  (e) => setPickupDate(e.target.value)}/>

                            </div>

                            {/* return date  */}
                            <div className="" >

                                <label className="block mb-1 font-medium" >Return Date</label>
                                <input type="date" name="return-date" value={returnData} disabled={!pickupDate} min={pickupDate || today } onChange={ (e) => setReturnDate(e.target.value) }/>

                            </div>

                            <button className="bg-blue-400 text-white max-md:p-4 rounded-2xl" >Search</button>
                        </form>

                    </div>

                </div>

            </section>
        </>
    );
}