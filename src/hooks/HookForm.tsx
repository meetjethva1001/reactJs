import { useState } from 'react'
import { useForm } from 'react-hook-form'
export default function HookForm() {

    interface Users {
        Name: string,
        Email: string,
        Password: string
    }

    const { handleSubmit, register, formState: { errors } }: any | undefined = useForm<Users>({})
    const [users, setUsers] = useState<Users[]>([])

    function submitHandler(data: any): void {
        setUsers((pre) => [...pre, data])
    }
    const allValidators = {
        nameValidator: {
            required: {
                value: true,
                message: '*Name is required..'
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: '*Email is required..'
            }
        },
        passwordValidator: {
            required: {
                value: true,
                message: '*Password is required..'
            },
            pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                message: '*Enter valid Password'
            }
        }
    }
    console.log("user: ", users)
    return (
        <>
            <div className="flex items-center justify-center h-120 ">
                <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit(submitHandler)}>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            {...register("Name", allValidators.nameValidator)}
                        />
                        {errors.Name && (<span className='text-red-600 text-xs'>{errors.Name.message}</span>)}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            {...register("Email", allValidators.emailValidator)}
                        />
                        {errors.Email && (<span className='text-red-600 text-xs'>{errors.Email.message}</span>)}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            placeholder="********"
                            {...register("Password", allValidators.passwordValidator)}
                        />
                        {errors.Password && (<span className='text-red-600 text-xs'>{errors.Password.message}</span>)}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className='flex items-center justify-around flex-wrap gap-4'>
            {
                users?.map((user) => {
                    return (
                        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

                            <div className="w-full h-50">
                                <img
                                    src="/src/assets/user.png"
                                    alt="Sample"
                                    className="w-full h-full"
                                />
                            </div>

                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{user.Name}</h2>

                                <p className="text-gray-700 mb-4">
                                    <b>EMAIL : </b>{user.Email} <br />
                                    <b>Password : </b>{user.Password}
                                </p>
                                <div className="flex justify-center">
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        </>
    )
}