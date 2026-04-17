import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { login } from '../features/slice'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate()
    type lofinData = {
        name : string,
        password :string
    }

    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm<lofinData>()

    function submitHandler(data: lofinData) {
        dispatch(
            login({
                name: data.name,
                password: data.password,
            }),
        );
         navigate("/product")
    }


        return (
            <div className="h-180 flex items-center justify-center px-4">
                <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">

                    <h1 className="text-xl font-semibold text-center text-gray-800 mb-6">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("name")}
                                required
                            />


                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("password")}
                                required
                            />


                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }