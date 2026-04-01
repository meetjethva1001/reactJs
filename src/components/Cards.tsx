export default function Cards({name,email,age}) :any  {
    return (
        <>
          
                <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="w-full h-50">
                        <img
                            src="/src/assets/user.png"
                            alt="Sample"
                            className="w-full h-full"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{name}</h2>
                        <p className="text-gray-700 mb-4">
                            {email} <br />
                            {age}
                        </p>
                        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Learn More
                        </button> */}
                    </div>
                </div>
            
        </>
    )
}