
import {dummyMyBookingsData} from "../../assets/all-assets/assets.js";

import BookedCarsCard from "./BookedCarsCard.jsx";

export default function MyBookingsPage() {
    return (

        <section>

            <div className=" font-outfit px-16  
                max-md:px-8 " >
                {/* top div  */}

                <div className="
                    my-16 " >
                    <h1 className=" font-[600] text-[2rem] ">My Bookings</h1>
                    <p className=" font-[400] text-[#64748B] text-[1.2rem] ">View and manage your car bookings</p>
                </div>



                {/* bottom div showing cars booked  */}
                <div className=" " >
                    {
                        dummyMyBookingsData.map( (iter , index) => <BookedCarsCard key={iter._id} carData = {iter} indexOfEachCar = {index}  /> )
                    }
                </div>
            </div>

        </section>
    );
}