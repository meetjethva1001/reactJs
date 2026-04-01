import Child from "./Child";

export default function Parent() {
    var name = 'react name he!!'
    return (
        <>
            <h3>these are print by child component : {name}</h3>
            <Child username={name}/>
        </>
    )
}