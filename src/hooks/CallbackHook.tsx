import React , { useState } from "react"
import SecondChild from "../components/SecondChild";
// import SecondChild from "../components/SecondChild"

function CallbackHook() {
    const [num, setNum] = useState(0)
    console.log("parent rednder");
    return (
        <>
            <div className="flex items-center justify-center h-170 gap-3">
                
                <button className="rounded bg-gray-300 px-2"
                onClick={() => setNum(num+1)}
                >+</button>

                <button className="rounded bg-gray-300 px-2">{num}</button>
            </div>
            <SecondChild number={num}/>
        </>
    )
}
export default React.memo(CallbackHook)