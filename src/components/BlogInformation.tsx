import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Blog {
    id: number;
    title: string;
    desc: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    img: string;
}

export default function BlogInformation() {
    const { bid } = useParams<{ bid: string }>();

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function getJsonData() {
        try {

            const response = await fetch("/data/blogs.json");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const res: Blog[] = await response.json();

            const filterBlog = res.find((fil) => fil.id === Number(bid));

            if (!filterBlog) {
                throw new Error(`Blog with ID ${bid} not found`);
            }

            setBlog(filterBlog);
        } catch (err: any) {
            console.error("Error fetching blog:", err);
            setError(err.message || "Failed to load the blog");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {  
        getJsonData();
    }, [bid]);


    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-xl text-gray-600">Loading blog...</p>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-red-600 mb-2">Oops!</h2>
                    <p className="text-gray-600">{error || "Blog not found"}</p>
                </div>
            </div>
        );
    }

    // Main Blog Content
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-24"></div>

            <main className="max-w-4xl mx-auto px-4 pb-12">
                {/* Category */}
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">
                    {blog.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-800">
                    {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm mb-8">
                    <span>By {blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                </div>

                {/* Featured Image */}
                <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-80 object-contain rounded-lg mb-8 shadow-md"
                />

                {/* Blog Content */}
                <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed">
                    {/* Use blog.content if it's HTML, or split if it's plain text */}
                    <div className="prose prose-indigo max-w-full text-gray-700">
                        <p>{blog.content}</p>
                    </div>

                    {/* Fallback if content is plain text and you want to keep your static example */}
                    {/* 
                    <p>{blog.content}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    */}
                </div>
            </main>

            <footer className="text-center py-8 mt-12 text-gray-500 text-sm border-t">
                © 2026 MyBlog. All rights reserved.
            </footer>
        </div>
    );
}