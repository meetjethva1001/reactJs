import { useForm } from 'react-hook-form'
import { useContext } from "react";
import { formContext } from "./FormContextData";
import { useNavigate } from 'react-router-dom';

export default function UserDetailForm() {
    const naviate = useNavigate()
    interface User {
        name: string,
        email: string,
        password: string
    }

    const { handleSubmit, register, formState: { errors } } = useForm<User>();
    const allValidators = {
        nameValidator: {
            required: {
                value: true,
                message: "*Name is required.."
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: "*Email is required.."
            }
        },
        passwordValidator: {
            required: {
                value: true,
                message: "*Password id requried.."
            },
            minLength: {
                value: 4,
                message: "*Invalid password.."
            },
            maxLength: {
                value: 6,
                message: "*Invalid password"
            }
        }
    }
    const context = useContext(formContext);

    if (!context) {
        throw new Error("formContext not found. Wrap in FormProvider");
    }

    const { setUser, user } = context;
    function submitHandler(data: user) {
        setUser(data)
    }
    console.log("user:", user);
    return (
        <>
            <div className="h-180 flex items-center justify-center bg">
                <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4"
                    onSubmit={handleSubmit(submitHandler)}
                >

                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Enter credentials
                    </h2>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("name", allValidators.nameValidator)}
                        />
                        {errors.name && (<span className="text-xs text-red-600">{errors.name.message}</span>)}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("email", allValidators.emailValidator)}
                        />
                        {errors.email && (<span className="text-xs text-red-600">{errors.email.message}</span>)}
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("password", allValidators.passwordValidator)}
                        />
                        {errors.password && (<span className="text-xs text-red-600">{errors.password.message}</span>)}
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
                        onClick={()=>naviate('/user-location')}
                    >
                        Next
                    </button>
                </form>
            </div>
        </>
    )
}