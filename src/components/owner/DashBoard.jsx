
import { dummyDashboardData, assets } from "../../assets/all-assets/assets.js";

// booking related data 

const bookingRelatedData = [
    { Label: "Total Cars", LabelCount: dummyDashboardData.totalCars, LabelIcon: assets.carIconColored },
    { Label: "Total Bookings", LabelCount: dummyDashboardData.totalBookings, LabelIcon: assets.listIconColored },
    { Label: "Pending Bookings", LabelCount: dummyDashboardData.pendingBookings, LabelIcon: assets.cautionIconColored },
    { Label: "Completed Booking", LabelCount: dummyDashboardData.completedBookings, LabelIcon: assets.listIconColored }
];



export default function DashBoard() {

    return (

        // parent 
        <div className=" font-outfit  w-full p-8 " >

            <div className=" w-[54%] " >
                <h1 className=" text-[2rem] font-[400] " >Admin Dashboard</h1>
                <p className=" text-[#64748B] font-[400] ">Monitor overall platform performance including total cars, bookings, revenue, and recent activities</p>
            </div>

            {/* data cards  */}
            <div className=" flex mt-8" >
                {
                    bookingRelatedData.map(iter =>
                        <div className=" border-2 border-[#DDE1EE] flex justify-around items-center w-[23%] me-3 rounded-md py-4">
                            {/* details  */}
                            <div>
                                <p>{iter.Label}</p>
                                <p className=" font-[500] text-[1.2rem] " >{iter.LabelCount}</p>
                            </div>

                            {/* icons  */}
                            <div className=" w-[16%] bg-[#EEF4FF] rounded-full p-1 " >
                                <img src={iter.LabelIcon} alt={`${iter.Label} image`} className=" w-full " />
                            </div>
                        </div>
                    )
                }
            </div>


            {/* recent booking and monthly revenue  */}
            <div className=" bg-indigo-200 flex " >

                {/* recent bookings data  */}
                <div className=" border-2 border-black "  >

                    <div>
                        <h3>Recent Bookings</h3>
                        <p>Latest customer bookings</p>
                    </div>

                    {/* model icon and pickup date  */}
                    <div>
                        {
                            dummyDashboardData.recentBookings.map(iter =>
                                <div>
                                    {/* icon, car model and pickup date  */}
                                    <div>
                                        <div>
                                            <img src={assets.listIconColored} alt="" />
                                        </div>

                                        <div>
                                            <p>{`${iter.car.brand} ${iter.car.model}`}</p>
                                            <p></p>
                                        </div>

                                    </div>

                                    {/* amount and booking status  */}
                                    <div></div>
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* monthly revenue  */}
                <div className=" border-2 border-black " >
                    <h3>Monthly Revenue</h3>
                </div>
            </div>
        </div>
    );
}