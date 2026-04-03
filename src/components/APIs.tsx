import { useEffect, useState } from "react"
import Loader from "./Loader";

export default function APIs() {
    const [users, setUsers] = useState([])
    const [recive , setReceive] = useState(true);

    async function getApiData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error
        let res = await response.json()
        setUsers(res)
        setReceive(false)
    }
    useEffect(() => {
        getApiData()
    }, [])


    return (
        <>
            <div className="flex justify-around items-center min-h-screen flex-wrap gap-6 mt-6">
                {
                    recive ? <Loader/> :
                    users.length <= 0 ? 'No users Found!!' : users?.map((user : any, index : number)   => {
                        return (
                            
                            <div key={index} className="bg-white shadow-lg rounded-2xl p-5 w-80">

                                <img
                                    src="/src/assets/user.png"
                                    alt="card"
                                    className="rounded-xl mb-2 w-32 mx-auto"
                                />

                                <h2 className="text-xl font-bold mb-2">{user?.name}</h2>

                                <p className="text-gray-600 mb-4">
                                   <strong>Email : </strong>{user?.email} <br />
                                   <strong>Phone :</strong>{user?.phone}
                                </p>

                                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                                    Read More
                                </button> */}

                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}