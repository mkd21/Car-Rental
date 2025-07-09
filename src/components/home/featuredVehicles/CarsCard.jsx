


export default function CarsCard({data}) {

    return (
        <>
            {/* car image  */}
            <div className="bg-yellow-300 xl:w-[19rem] rounded-[24px] overflow-hidden ">
                {/* car image  */}
                <div className=" xl:h-[60%]" >
                    <img src={data.carImage} alt="car image" className=" xl:w-full xl:h-full " />
                </div>

                {/* car details  */}
                <div className="xl:w-[78%] m-auto" >
                    <p>BMW X5</p>
                    <p>SUV 2022</p>
                    <p>Automatic</p>
                    <p>Los Angeles</p>
                </div>
            </div>

        </>
    );
}