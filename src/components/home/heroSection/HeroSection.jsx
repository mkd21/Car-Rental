

import { cityList, assets } from "../../../assets/all-assets/assets.js";

import { useFormik } from "formik";

const initialValue = {
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
}

export default function HeroSection() {

    const today = new Date().toLocaleDateString("en-CA");

    const formik = useFormik({
        initialValues: initialValue,

        validate: (dataReceived) => {

            const errors = {};

            if (!dataReceived.pickupLocation) errors.pickupLocation = "required";

            if (!dataReceived.pickupDate) errors.pickupDate = "required";

            if (!dataReceived.returnDate) errors.returnDate = "required";

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <>
            {/* Hero section  */}
            <section className=" bg-light">

                <div className=" pt-[6rem] pb-[3rem] " >

                    <div className="mb-[4rem]" >
                        <h1 className="font-[600] text-[#414141] m-auto text-center 
                            max-md:w-[90%] max-md:text-[2.3rem]
                            xl:text-[4rem] ">
                            Luxury Cars on Rent
                        </h1>
                    </div>

                    {/* form div  */}

                    <div className=" max-md:w-[90%] xl:w-[80%] m-auto rounded-[34px] py-6 " style={{ boxShadow: "0px 0px 15px black" }} >

                        <form className=" flex max-md:flex-col max-md:items-center
                            xl:justify-around " onSubmit={formik.handleSubmit}
                        >

                            {/* pickup location  */}
                            <div className=" max-md:w-[80%]  text-center font-[500] max-md:mb-4 " >

                                <label className="block mb-1 font-[500] text-[#2B3441E5] text-[1.6rem] " >Pickup Location</label>

                                <select name="pickupLocation" id=""
                                    onChange={formik.handleChange}
                                    value={formik.values.pickupLocation}
                                    onBlur={formik.handleBlur}
                                    className=" max-md:text-[1.2rem] bg-transparent text-[#1485bc]"
                                >
                                    <option value="">Pickup Location</option>
                                    {
                                        cityList.map((currentCity, index) => <option key={index} value={currentCity} >{currentCity}</option>)
                                    }
                                </select>

                                {formik.touched.pickupLocation && formik.errors.pickupLocation && (
                                    <div className="text-red-500 text-sm">{formik.errors.pickupLocation}</div>
                                )}
                            </div>


                            {/* pickup date  */}
                            <div className=" max-md:w-[80%]  text-center font-[500] max-md:mb-4 " >

                                <label className="block mb-1 font-[500] text-[#2B3441E5] text-[1.6rem]" >Pick-up Date</label>
                                <input type="date" name="pickupDate" min={today}
                                    values={formik.values.pickupDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="max-md:text-[1.2rem] bg-transparent"
                                />

                                {formik.touched.pickupDate && formik.errors.pickupDate && (
                                    <div className="text-red-500 text-sm">{formik.errors.pickupDate}</div>
                                )}
                            </div>


                            {/* return date  */}
                            <div className=" max-md:w-[80%] text-center font-[500] max-md:mb-4 " >

                                <label className="block mb-1 font-[500] text-[#2B3441E5] text-[1.6rem]" >Return Date</label>
                                <input type="date" name="returnDate"
                                    value={formik.values.returnDate}
                                    disabled={!formik.values.pickupDate}
                                    min={formik.values.pickupDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="max-md:text-[1.2rem] bg-transparent"
                                />

                                {formik.touched.returnDate && formik.errors.returnDate && (
                                    <div className="text-red-500 text-sm">{formik.errors.returnDate}</div>
                                )}
                            </div>

                            <button type="submit"
                                className="bg-[#2563EB] text-white font-[600] max-md:rounded-2xl max-md:p-4  max-md:w-[55%]
                                    xl:w-[12%] rounded-[3rem] ">
                                Search
                            </button>
                        </form>

                    </div>

                    {/* main car image section  */}

                    <div className=" max-md:mt-[4rem] xl:w-[80%] xl:mt-[5rem] m-auto " >
                        <img className=" xl:w-[80%] m-auto " src={assets.main_car} href="main car" />
                    </div>
                </div>

            </section>

        </>
    );
}