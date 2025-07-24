
import { dummyDashboardData, assets } from "../../assets/all-assets/assets.js";

// booking related data 

const bookingRelatedData = [
    { Label: "Total Cars", LabelCount: dummyDashboardData.totalCars, LabelIcon: assets.carIconColored },
    { Label: "Total Bookings", LabelCount: dummyDashboardData.totalBookings, LabelIcon: assets.listIconColored },
    { Label: "Pending Bookings", LabelCount: dummyDashboardData.pendingBookings, LabelIcon: assets.cautionIconColored },
    { Label: "Completed Booking", LabelCount: dummyDashboardData.completedBookings, LabelIcon: assets.listIconColored }
];

const ISOtoRequiredFormat = (receivedDateAndTime) => {

    const date = receivedDateAndTime.split("T")[0].split("-")

    return { month: date[1], day: date[2], year: date[0] };
}


export default function DashBoard() {


    return (

        // parent 
        <div className=" font-outfit  w-full p-8 " >

            <div className=" xl:w-[54%] " >
                <h1 className=" text-[2rem] font-[400] " >Admin Dashboard</h1>
                <p className=" text-[#64748B] font-[400] ">Monitor overall platform performance including total cars, bookings, revenue, and recent activities</p>
            </div>

            {/* data cards  */}
            <div className=" flex max-md:flex-wrap max-md:justify-between mt-8" >
                {
                    bookingRelatedData.map(iter =>
                        <div key={iter.Label} className=" border-2 border-[#DDE1EE] flex justify-around items-center rounded-md py-4
                            max-md:w-full xl:w-[23%] xl:me-3 max-md:my-3 ">

                            {/* details  */}
                            <div className=" max-md:w-[40%] " >
                                <p className=" text-[#6B7280] " >{iter.Label}</p>
                                <p className=" font-[500] text-[1.2rem]">{iter.LabelCount}</p>
                            </div>

                            {/* icons  */}
                            <div className=" w-[10%] bg-[#EEF4FF] rounded-full p-1 " >
                                <img src={iter.LabelIcon} alt={`${iter.Label} image`} className=" w-full " />
                            </div>
                        </div>
                    )
                }
            </div>


            {/* recent booking and monthly revenue  */}
            <div className="font-inter flex justify-around mt-8 
                max-md:flex-wrap  " >

                {/* recent bookings data  */}
                <div className=" border-2 border-[#0000000D] p-4 w-[50%] rounded-lg 
                    max-md:w-full max-md:mb-3 " style={{ backgroundColor : "0 1px 2px" }} >

                    <div>
                        <h3 className=" text-[1.5rem] " >Recent Bookings</h3>
                        <p className=" text-[#64748B] text-[0.9rem] " >Latest customer bookings</p>
                    </div>

                    {/* model icon and pickup date  */}
                    <div className=" mt-4 " >
                        {
                            dummyDashboardData.recentBookings.map((iter) => {

                                const { month, day, year } = ISOtoRequiredFormat(iter.pickupDate);

                                return (
                                    <div key={iter._id} className=" flex justify-between mt-3"  >
                                        {/* icon, car model and pickup date  */}
                                        <div>
                                            <div >
                                                <img src={assets.listIconColored} alt="" className=" " />
                                            </div>

                                            <div className=" " >
                                                <p className=" font-[400] xl:text-[1.3rem] " >{`${iter.car.brand} ${iter.car.model}`}</p>
                                                <p className=" text-[#64748B] text-[0.9rem] " >{` ${month} / ${day} / ${year} `}</p>
                                            </div>

                                        </div>

                                        {/* amount and booking status  */}
                                        <div className=" w-[40%] " >
                                            {/* amount  */}
                                            <div>
                                                <p className=" text-[#64748B] font-[500] " > {`$ ${iter.price}`} </p>
                                            </div>

                                            {/* booking status  */}
                                            <div className=" border-[#E2E8F0] border-2 p-1 text-center rounded-full font-[500] " >
                                                <p> {` ${iter.status} `} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* monthly revenue  */}
                <div className=" border-2 border-[#0000000D] w-[30%] p-5 rounded-lg 
                    max-md:w-full " style={{ backgroundColor : "0 1px 2px" }}>

                    <div>
                        <h3 className=" text-[1.3rem] font-[500] " >Monthly Revenue</h3>
                        <p className=" text-[#64748B] " >Revenue for current month</p>
                    </div>
                    
                    <div className=" mt-[3rem] text-[#2563EB] text-[3rem] font-[700] " >
                        <p> {` $ ${dummyDashboardData.monthlyRevenue} `} </p>
                    </div>

                </div>
            </div>
        </div>
    );
}