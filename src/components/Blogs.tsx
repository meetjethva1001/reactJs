import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
    interface Blog {
        id: number;
        title: string;
        desc: string;
        content: string;
        category: string;
        author: string;
        date: string;
        color: string;
        readTime: string;
        img: string;
    }

    async function getJsonData(): Promise<void> {
        const response = await fetch("/public/data/blogs.json")
        if (response.status != 200) throw new Error;
        const res = await response.json()
        setBlogs(res)
    }
    
    useEffect(() => {
        getJsonData()
    }, [])

    const [blogs, setBlogs] = useState<Blog[]>([])
    return (
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Navbar */}
                {/* <header className="bg-white shadow-sm">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                        <h1 className="text-xl font-bold text-indigo-600">MyBlog</h1>
                        <nav className="space-x-4 hidden md:block">
                            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600">Blogs</a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
                        </nav>
                    </div>
                </header> */}

                {/* Hero */}
                {/* <section className="text-center py-12 px-4 bg-gradient-to-r from-gray-500 to-gray-800 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Explore Amazing Blogs
                    </h2>
                    <p className="text-lg opacity-90">
                        Discover articles on design, development, and more.
                    </p>
                </section> */}

                {/* Blog Grid */}
                <main className="max-w-6xl mx-auto px-4 py-10">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-48 object-contain"
                                />

                                <div className="p-5">
                                    <span
                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${blog.color}`}
                                    >
                                        {blog.category}
                                    </span>

                                    <h3 className="text-lg font-bold mt-3 mb-2 text-gray-800">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 h-8">
                                        {blog.desc}
                                    </p>

                                    <Link to={`/blog/${blog.id}`} className="text-indigo-600 font-medium hover:underline hover:cursor-pointer
                                    hover:text-gray-700">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Footer */}
                <footer className="text-center py-6 text-gray-500 text-sm">
                    © 2026 MyBlog. All rights reserved.
                </footer>
            </div>
        </>
    )
}