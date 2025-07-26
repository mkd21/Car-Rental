
import { Formik, useFormik } from "formik";

const currency = import.meta.env.VITE_CURRENCY;

import { assets } from "../../../assets/all-assets/assets.js";
import { useState } from "react";

const initialValues = {
    image: null,
    Brand: "",
    Model: "",
    Year: "",
    DailyPrice: "",
    Category: "",
    Transmission: "",
    FuelType: "",
    SeatingCapacity: "",
    Location: "",
    Description: ""
}

export default function AddCar() {

    const [image, setImage] = useState(null);

    const { handleBlur, handleChange, handleSubmit, values, setFieldValue } = useFormik({
        initialValues,
        onSubmit: receivedData => {
            console.log(receivedData);
        }
    });

    return (
        <>
            <div>
                {/* header section  */}
                <section>
                    <div>
                        <h1>Add New Car</h1>
                        <p className=" text-[#64748B]">Fill in details to list a new car for booking, including pricing, availability, and car specifications.</p>
                    </div>
                </section>


                {/* form section  */}

                <section>

                    <form onSubmit={handleSubmit} >
                        <div className=" bg-yellow-200 " >

                            {/* image of the car  */}
                            <div className=" my-5 " >
                                <label htmlFor="car-image">
                                    <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className=" cursor-pointer " />
                                    <input type="file" name="image" accept="image/*" id="car-image" hidden onChange={(e) => {
                                        const file = e.currentTarget.files[0];
                                        setImage(e.target.files[0]);
                                        setFieldValue("image", file);
                                    }} />

                                    <p>Upload a picture of your car</p>
                                </label>
                            </div>

                            {/* brand and model  */}

                            <div>
                                {/* brand  */}
                                <div className="my-3" >
                                    <label htmlFor="car-brand">Brand</label>
                                    <input type="text" id="car-brand" name="Brand" value={values.Brand} onChange={handleChange} placeholder="e.g. BMW, Mercedes, Audi..." />
                                </div>

                                {/* model  */}
                                <div className=" my-3 " >
                                    <label htmlFor="car-model">Model</label>
                                    <input type="text" id="car-model" name="Model" value={values.Model} onChange={handleChange}  placeholder="e.g. X5, E-Class, M4..." />
                                </div>

                                {/* year , price and category  */}
                                <div className="my-3" >
                                    <label htmlFor="car-year">Year</label>
                                    <input type="text" id="car-year" name="Year" value={values.Year} onChange={handleChange}  placeholder="2025" />

                                    <label htmlFor="car-price">{`Daily Price(${currency})`}</label>
                                    <input type="text" id="car-price" name="DailyPrice" value={values.DailyPrice} onChange={handleChange}  placeholder="100" />

                                    <label htmlFor="car-category">Category</label>
                                    <input type="text" id="car-category" name="Category" value={ values.Category } onChange={handleChange}  placeholder="Sedan" />
                                </div>

                                {/* location  */}
                                <div className="my-3">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" id="location" name="Location" value={ values.Location } onChange={handleChange}  placeholder="eg. San Francisco, CA" />
                                </div>

                                {/* description  */}
                                <div className="my-3" >
                                    <label htmlFor="description">Description</label>
                                    <textarea cols={100} rows={5} id="description" name="Description" value={values.Description} onChange={handleChange}  placeholder="Describe your car, its condition, and any notable details..." ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="bg-[#2563EB] text-white p-3 rounded-md ">List Your Car</button>
                        </div>
                    </form>

                </section>
            </div>
        </>
    );
}