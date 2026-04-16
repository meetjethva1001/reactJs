import { useState } from "react"
import { Link } from "react-router-dom"
import CartIcon from "./CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";

export default function Navbar({ onClickUnmount }: any) {
    const [count, setCount] = useState(0)

    function incrementCount(): void {
        setCount(count + 1);
    }
    function decrementCount(): void {
        count <= 0 ? 0 : setCount(count - 1)
    }
    const dispatch = useDispatch()
    const selector = useSelector((state : any ) => state.cart)
    return (
        <nav className="bg-white-800 text-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
                {/* Brand */}
                <Link to={'/'} className="text-2xl text-gray-400 font-bold">
                    cyruS
                </Link>

                {/* Links */}
                <nav className="flex gap-6 mt-2 md:mt-0">
                    <Link to="/form" className="hover:text-gray-400 transition-colors">
                        Form
                    </Link>
                    <Link to="/apis" className="hover:text-gray-400 transition-colors">
                        APIs
                    </Link>
                    <Link to="/form-hook" className="hover:text-gray-400 transition-colors">
                        Form-Hook
                    </Link>
                    <Link to="/blogs" className="hover:text-gray-400 transition-colors">
                        Blogs
                    </Link>
                    <Link to="/product" className="hover:text-gray-400 transition-colors">
                        Shop
                    </Link>
                </nav>
                <div className="btns flex gap-5">
                    <button className="bg-blue-400 rounded px-3 py-1 cursor-pointer hover:bg-blue-500" onClick={() => incrementCount()}>Inc +</button>
                    <button className="bg-blue-400 rounded px-3 py-1 cursor-pointer hover:bg-blue-500" onClick={() => decrementCount()}>Dec -</button>
                    <button className="bg-gray-500 px-3 py-1 rounded">{count}</button>
                    <button className="px-4 py-1 bg-indigo-300 rounded text-white-400 hover:cursor-pointer" onClick={() => onClickUnmount()}>Unmount component</button>
                    <Link to={'/cart'}><CartIcon value={selector.products.length === 0 ? 0 : selector.products.length}/></Link>
                    <button className="px-2 bg-red-500 rounded text-white hover:cursor-pointer"
                    onClick={() => dispatch(clearCart())}
                    >CLear Cart</button>
                </div>
            </div> 
        </nav>
    )
}