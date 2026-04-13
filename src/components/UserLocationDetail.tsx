import { useContext } from "react"
import { useForm } from "react-hook-form"
import { formContext } from "./FormContextData";

export default function UserLocationDetail() {
    const { handleSubmit, register, formState: { errors } }: any | undefined = useForm()
    const allValidators = {
        countryValidator: {
            required: {
                value: true,
                message: "*country is required.."
            }
        },
        stateValidator: {
            required: {
                value: true,
                message: "*state is required.."
            }
        },
        cityValidator: {
            required: {
                value: true,
                message: "*city requried.."
            }
        }
    }
    const context = useContext(formContext);

    if (!context) {
        throw new Error("formContext not found. Wrap in FormProvider");
    }

    const { setUser, user } = context;

    function submitHandler(data: any) {
        setUser({...user , ...data})
    }
    console.log(user);
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4"
                    onSubmit={handleSubmit(submitHandler)}
                >

                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Location Details
                    </h2>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Country
                        </label>
                        <input
                            type="text"
                            {...register("country", allValidators.countryValidator)}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.country && (<span className="text-xs text-red-600">{errors.country.message}</span>)}
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <input
                            type="text"
                            {...register("state", allValidators.stateValidator)}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.state && (<span className="text-xs text-red-600">{errors.state.message}</span>)}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            {...register("city", allValidators.cityValidator)}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.city && (<span className="text-xs text-red-600">{errors.city.message}</span>)}
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}