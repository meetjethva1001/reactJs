import { useEffect, useState } from "react"

export default function useFetch(url: any) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    async function getApiResponse() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error occured while fetching Api response");
            let res = await response.json()
            setLoading(true);
            setData(res)
        } catch (err) { console.warn("Error occured while fetching apis") }

    }
    useEffect(() => {
        getApiResponse()
    }, [url])
    return { data, loading }
}