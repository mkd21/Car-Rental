
import { assets } from "../../../assets/all-assets/assets.js";


export default function Banner() {
    return (
        <>
            <section className=" bg-gradient-to-b from-[#0558FE] to-[#A9CFFF] xl:bg-gradient-to-r" >

                {/* parent div  */}
                <div className=" flex font-outfit m-auto max-md:flex-col max-md:w-[70%]  max-md:mt-[5rem] xl:mt-[10rem] " >

                    {/* left section  */}
                    <div className="font-[600] xl:w-[50%] xl:ms-[3rem] mt-[3rem] text-[#FFFFFF] " >
                        <div className="text-[2rem] " >
                            <h2>Do You Own a Luxury Car?</h2>
                        </div>

                        <div className=" font-[400] my-8 max-md:text-[1rem] xl:text-[1.2rem]  " >
                            <p>
                                Monetize your vehicle effortlessly by listing it on CarRental.
                                We take care of insurance, driver verification, and secure payments — so 
                                you can earn passive income, stress-free.
                            </p>
                        </div>

                        <button className=" bg-white text-[#0257FF] max-md:w-[43%] max-md:h-[5vh] xl:p-[1.3rem] rounded-[18px] xl:text-[1.2rem] xl:w-[31%] " >List your car</button>
                    </div>

                    {/* right section  */}
                    <div className=" mt-8 xl:mt-[8rem] ">   
                        <img src={assets.banner_car_image} alt="" />
                    </div>

                </div>

            </section>
        </>
    );
}