
import {dummyMyBookingsData} from "../../assets/all-assets/assets.js";

import BookedCarsCard from "./BookedCarsCard.jsx";

export default function MyBookingsPage() {
    return (

        <section>

            <div className=" font-outfit bg-green-200 
                px-16  " >
                {/* top div  */}

                <div className="
                    my-16 " >
                    <h1 className=" font-[600] text-[2rem] ">My Bookings</h1>
                    <p className=" font-[400] text-[#64748B] text-[1.2rem] ">View and manage your car bookings</p>
                </div>



                {/* bottom div showing cars booked  */}
                <div className=" bg-orange-300 " >
                    {
                        dummyMyBookingsData.map( (iter) => <BookedCarsCard key={iter._id} carData = {iter}  /> )
                    }
                </div>
            </div>

        </section>
    );
}