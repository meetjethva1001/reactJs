import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../redux/slice"
import { fetchApiResponse } from "../redux/productSlice"
import { useEffect, useState } from "react"
import type { AppDispatch } from "../redux/store"
import Loader from "./Loader"

export default function Product() {
    const clcikCount = 1;
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchApiResponse())
    }, [])

    const {data , status } = useSelector((state : any  ) => { return state.product })
    const res = data?.products;
    const load = status
    console.log(load);

    return (
        <>
        <div className="flex items-center justify-center w-full flex-wrap gap-5">
            {
               load ? <Loader/> :  res?.map((pro : any ,index : number ) => {
                    return (
                        <div key={index} className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">

                            {/* Image */}
                            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                                    <img className='object-contain h-full w-full ' src={pro.images[0]} alt="image failed" />
                            </div>

                            {/* Content */}
                            <div className="p-4 space-y-3">

                                {/* Title */}
                                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                    {pro.title}
                                </h2>

                                {/* Brand + Category */}
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{pro.brand}</span>
                                    <span className="capitalize">{pro.category}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {pro.description}
                                </p>

                                {/* Price + Stock */}
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xl font-bold text-gray-900">${pro.price}</span>

                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                                       {pro.availabilityStatus}
                                    </span>
                                </div>

                                {/* Button */}
                                <button className="w-full mt-3 bg-black text-white py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition hover:cursor-pointer"
                                    onClick={() => dispatch(addItem(pro))}
                                >
                                    Add to Cart
                                </button>
                                <button className="w-full mt-3 bg-red-400 text-white py-2 rounded-xl text-sm font-medium hover:bg-red-500 transition hover:cursor-pointer"
                                    onClick={() => dispatch(removeItem())}
                                >
                                    Remove Item
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}