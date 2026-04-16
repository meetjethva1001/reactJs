import { useDispatch, useSelector } from "react-redux";
import { removeItem , increaseQuantity ,decreaseQuantity} from "../redux/slice";

export default function Cart() {

    const selector = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()

    return (
        <div className="flex items-cetnter justify-center w-full flex-wrap gap-10">
            {
                selector.products.length <= 0 ? <h2>No products Found!!</h2> : selector.products?.map((pro: any, index: any) => {
                    return (
                        <div key={index} className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">


                            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                                <img className='object-contain h-full w-full ' src={pro.images[0]} alt="image failed" />
                            </div>


                            <div className="p-4 space-y-3">


                                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                    {pro.title}
                                </h2>


                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{pro.brand}</span>
                                    <span className="capitalize">{pro.category}</span>
                                </div>


                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {pro.description}
                                </p>


                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xl font-bold text-gray-900">${pro.quantity <= 1 ? pro.price : (pro.price*pro.quantity).toFixed(2)}</span>

                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                                        {pro.availabilityStatus}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        className="px-3 py-1 bg-gray-300 rounded-lg"
                                        onClick={() => dispatch(decreaseQuantity(pro))}
                                    >
                                        -
                                    </button>

                                    <span className="font-semibold">
                                        {pro.quantity || 1}
                                    </span>

                                    <button
                                        className="px-3 py-1 bg-gray-300 rounded-lg"
                                        onClick={() => dispatch(increaseQuantity(pro))}
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="w-full mt-3 bg-red-400 text-white py-2 rounded-xl text-sm font-medium hover:bg-red-500 transition hover:cursor-pointer"
                                    onClick={() => dispatch(removeItem(pro))}
                                >
                                    Remove Item
                                </button>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
