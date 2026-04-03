import { useEffect, useState } from "react"

export default function CleanUp() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const time = setInterval(() => {
            setCount(pre => pre + 1)
        }, 1000);

        return ()=>{
            clearInterval(time)
        }
    }, [])

    return (
        <>
            {count}
        </>
    )
}