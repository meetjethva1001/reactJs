import { useDispatch } from "react-redux"
import { addItem , removeItem} from "../redux/slice"

export default function Product() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex items-center justify-center h-200">
                <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

                    {/* Product Image */}
                    <img
                        src="https://www.rado.com/media/sgecom_contentsystem/SEO_pages/Gold-watches/Gold_watches_Hero_2000X2320.jpg"
                        alt="product"
                        className="w-full h-56 object-cover"
                    />

                    {/* Content */}
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800">
                            Wireless Headphones
                        </h2>

                        <p className="text-gray-500 text-sm mt-2">
                            High-quality wireless headphones with noise cancellation and long battery life.
                        </p>

                        {/* Price + Button */}
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-semibold text-green-600">
                                ₹49,499
                            </span>

                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
                                onClick={() => dispatch(addItem())}
                            >
                                Add to Cart
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition hover:cursor-pointer"
                                onClick={() => dispatch(removeItem())}
                            >
                                Remove Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}