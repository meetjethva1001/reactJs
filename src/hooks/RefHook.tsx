import { useRef } from "react"
export default function RefHook() {

    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    function handleForm(e: any ) {
        e.preventDefault()
        console.log(username.current?.value);
        console.log(password.current?.value);
    }

    return (
        <>
            <div className="flex items-center justify-center h-auto">
                <div className="w-150 h-70  rounded flex items-center justify-center">
                    <form onSubmit={handleForm}>
                        <input type="ext" placeholder="username" className="border p-1 rounded"
                            ref={username} /><br /><br />
                        <input type="text" placeholder="password" className="border p-1 rounded"
                            ref={password} /><br /><br />
                        <input type="submit" value={'Submit'} className="bg-blue-400 px-2 rounded" />
                    </form>
                </div>
            </div>
        </>
    )
}