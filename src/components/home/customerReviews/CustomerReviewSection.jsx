
import { assets } from "../../../assets/all-assets/assets.js";

const customerReviewDatas = [ 
    {
        id : 1,
        customerAvatar : assets.testimonial_image_1,
        customerName : "Emma Rodriguez",
        customerLocation : "Barcelona, Spain",
        customerRating : assets.fiveStars,
        customerReview : "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides."

    },
    {
        id : 2,
        customerAvatar : assets.testimonial_image_2,
        customerName : "Emma Rodriguez",
        customerLocation : "Barcelona, Spain",
        customerRating : assets.fiveStars,
        customerReview : "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides."
        
    }, 
    {
        id : 3,
        customerAvatar : assets.testimonial_image_1,
        customerName : "Emma Rodriguez",
        customerLocation : "Barcelona, Spain",
        customerRating : assets.fiveStars,
        customerReview : "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides."
        
    }
]

import CustomerReviewCards from "./CustomerReviewCards.jsx";

export default function CustomerReview() {
    return (
        <>
            <section>
                {/* parent */}
                <div className=" font-outfit mt-20 xl:mt-[12rem]" >

                    {/* top div  */}
                    <div className=" w-[70%] m-auto text-center ">
                        <h1 className=" text-[2rem] xl:text-[3rem] font-[600] " >What Our Customers Say</h1>
                        <p className=" max-md:text-[1.2rem] text-[1.4rem] font-[400] text-[#6B7280E5] " >Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.</p>
                    </div>

                    {/* bottom div  */}
                    <div className=" mt-[5rem] flex max-md:flex-col justify-around " >
                        {
                            customerReviewDatas.map( (iter) => <CustomerReviewCards key={iter.id} Cardsdata = {iter} /> )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}