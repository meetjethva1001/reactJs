import { useMemo, useState } from "react"

export default function MemoHook() {
    const [number, setNumber] = useState(0)
    const [inp, setInp] = useState(0)

    function expensiveFunc(num: number): number {
        console.log("expensive called");
        for (let i = 0; i <= 1000000000; i++) {}
        return num * 2;
    }

    const result = useMemo(() => {
        return expensiveFunc(inp)
    }, [inp])

    return (     
        <div className="flex justify-center items-center h-170 gap-2">
            <button
                className="bg-gray-300 px-2 rounded"
                onClick={() => setNumber(number + 1)}
            >
                Increment +
            </button>
        
            <button className="bg-red-300 rounded px-2">
                {number}
            </button>

            <input
                type="number"
                className="bg-red-300 rounded px-2"
                onChange={(e) => setInp(Number(e.target.value))}
                value={inp}
            />

            <p>Result: {result}</p>
        </div>
    )
}