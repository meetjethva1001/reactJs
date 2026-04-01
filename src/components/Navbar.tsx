import { Link } from "react-router-dom"

export default function Navbar() {
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
            </div>
        </nav>
    )
}