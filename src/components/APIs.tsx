import { useEffect, useState } from "react"
import Loader from "./Loader";

export default function APIs() {
    interface Users{
        name : string,
        email : string,
        phone : number
    }
    const [users, setUsers] = useState<Users[]>([])
    const [recive, setReceive] = useState(true);
    const [filterdUsers , setFilteredUsers] = useState<Users[]>([])

    async function getApiData(): Promise<void> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error
        let res = await response.json()
        setUsers(res)
        setFilteredUsers(res)
        setReceive(false)
    }
    useEffect(() => {
        getApiData()
    }, [])

    // function handleInput(e: KeyboardEvent): void {
    //     let target = e.target as HTMLInputElement;
    //     console.log(target.value)
    // }

    function debounce(func: Function, delay: number) {
        let timerId: number | undefined;
        return function (e: KeyboardEvent) {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                func(e)
            }, delay)
        }
    }

    function handleChange(e :any){
            debounceFunc(e.target.value)
    }

    const debounceFunc = debounce(function filterValues(value : string){
            const filter = users.filter(user => user?.name.toLowerCase().includes(value.toLocaleLowerCase()) )
            setFilteredUsers(filter)
    } , 600)
   

    return (
        <>
            <div className="flex items-center justify-center mt-5 ">
                <input className='border text-gray-600 px-2 py-1 rounded border-gray-400' type="text" placeholder="Search..." 
                onChange={handleChange}
                />
            </div>
            <div className="flex justify-around items-center h-180 flex-wrap gap-2 mt-6">
                {
                    recive ? <Loader /> :
                        filterdUsers.length <= 0 ? 'No users Found!!' : filterdUsers?.map((user: any, index: number) => {
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