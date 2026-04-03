import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar({ onClickUnmount }: any) {
    const [count, setCount] = useState(0)

    function incrementCount(): void {
        setCount(count + 1);
    }
    function decrementCount(): void {
        count <= 0 ? 0 : setCount(count - 1)
    }

    return (
        <nav className="bg-gray-700 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
                {/* Brand */}
                <Link to={'/'} className="text-xl font-bold">
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
                </nav>
                <div className="btns flex gap-5">
                    <button className="bg-blue-400 rounded px-3 py-1 cursor-pointer hover:bg-blue-500" onClick={() => incrementCount()}>Inc +</button>
                    <button className="bg-blue-400 rounded px-3 py-1 cursor-pointer hover:bg-blue-500" onClick={() => decrementCount()}>Dec -</button>
                    <button className="bg-gray-500 px-3 py-1 rounded">{count}</button>
                    <button className="px-4 py-1 bg-gray-800 rounded text-gray-400 hover:cursor-pointer" onClick={() => onClickUnmount()}>Unmount component</button>
                </div>
            </div>
        </nav>
    )
}