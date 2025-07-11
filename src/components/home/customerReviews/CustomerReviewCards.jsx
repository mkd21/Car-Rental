


export default function CustomerReviewCards({Cardsdata}) {

    return (
        <>
            <div className=" m-auto max-md:mb-12 max-md:w-[80%] w-[30%] rounded-[23px] p-4 " style={{"boxShadow" : "#d2d1d1 0px 0px 15px"}} >
                {/* customer avatar and ratings  */}
                <div>

                    {/* parent div of customer avatar and name  */}
                    <div className="flex justify-start items-center " >

                        <div className=" w-[20%] mr-4 ">
                            <img src={Cardsdata.customerAvatar} alt="customer avatar" />
                        </div>

                        <div>
                            <p className="text-[#374151] max-md:text-[1.2rem] text-[1.6rem] font-[500]">{Cardsdata.customerName}</p>
                            <p className=" text-[#374151A1] max-md:text-[1rem] text-[1.2rem]">{Cardsdata.customerLocation}</p>
                        </div>

                    </div>

                    {/* customer star ratings  */}
                    <div className=" flex my-4 max-md:w-[40%] w-[30%] h-[1.4rem] " >
                        <img src={Cardsdata.customerRating} alt="customer ratings" />
                    </div>

                </div>

                {/* customer review  */}
                <div className=" text-[#374151A1] text-[1.1rem] font-[400] " >
                    <p>
                        { Cardsdata.customerReview }
                    </p>
                </div>
            </div>
        </>
    );
}