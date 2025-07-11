

export default function NewsLetter() {
    return (
        <>
            <section>
                {/* parent div  */}
                <div className=" w-[70%] m-auto max-md:mt-8 mt-[8rem] font-outfit " >
                    {/* upper div  */}
                    <div className="text-center" >
                        <h1 className=" text-[#373737] font-[500] max-md:text-[2rem] text-[2.5rem] " >Never Miss a Deal!</h1>
                        <p className=" text-[#929292] font-[400] max-md:text-[1rem] text-[1.5rem] " >Subscribe to get the latest offers, new collections, and exclusive discounts.</p>
                    </div>

                    {/* search bar div  */}
                    <div className="text-center max-md:mt-4 mt-[3rem] ">
                        <form>

                            <div className="max-md:flex max-md:flex-col max-md:justify-start xl:h-[5vh] " >
                                <input type="email" placeholder="Enter your email address" 
                                    className=" border-2 border-[#C7C7C7] w-[60%] max-md:rounded-lg ps-8 max-md:w-full max-md:h-[5vh]
                                        xl:w-[40%] xl:h-full xl:rounded-s-lg " 
                                />
                                <button type="submit" 
                                    className=" bg-[#2563EB] w-[18%] text-[#FFFFFF] max-md:rounded-lg  
                                        max-md:w-[60%] max-md:mt-4 max-md:p-[0.5rem] m-auto
                                        xl:h-full xl:rounded-e-lg    ">
                                    Subscribe Now
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
        </>
    );
}