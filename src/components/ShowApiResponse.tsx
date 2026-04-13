import useFetch from "../hooks/useFetch"

export default function ShowApiResponse()  {
    const {data , loading} = useFetch("https://jsonplaceholder.typicode.com/users");
    if(!loading) return <p>Loading...</p>
    console.log(data);  //data fetch by useFetch custom hook
}