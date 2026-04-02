import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [count , setCount] = useState(0)

    function incrementCount():void{
        setCount(count+1);
    }
    function decrementCount() : void{
        count <= 0 ? 0 : setCount(count - 1)    
    }

    return (
        <nav className="bg-gray-700 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
                {/* Brand */}
                <div className="text-xl font-bold"> 
                    cyruS
                </div>

                {/* Links */}
                <nav className="flex gap-6 mt-2 md:mt-0">
                    <Link to="" className="hover:text-gray-400 transition-colors">
                        Home
                    </Link>
                    <a href="#" className="hover:text-gray-400 transition-colors">
                        About
                    </a>
                    <a href="#" className="hover:text-gray-400 transition-colors">
                        Services
                    </a>
                    <a href="#" className="hover:text-gray-400 transition-colors">
                        Contact
                    </a>
                </nav>
                <div className="btns flex gap-5">
                    <button className="bg-blue-400 rounded px-3 py-1 cursor-pointer hover:bg-blue-500" onClick={()=> incrementCount()}>Inc +</button>
                    <button className="bg-blue-400 rounded px-3 py-1 cursor-pointer hover:bg-blue-500" onClick={()=> decrementCount()}>Dec -</button>
                    <button className="bg-gray-500 px-3 py-1 rounded">{count}</button>
                    <button id="dark-mode">🌙</button>
                    {/* <button id="light-mode">🌞</button> */}
                </div>
            </div>
        </nav>
    )
}