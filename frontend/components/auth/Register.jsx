import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'sonner';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log('Registration data:', data);
        axiosPublic.post('/auth/sign-up', data)
            .then(result => {
                // console.log(result.data);
                localStorage.setItem("user", JSON.stringify(result.data.data));
                setUser(result.data.data);
                toast.success(result.data.message);
                navigate("/");
            })
            .catch(error => {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            })
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-5">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Full Name"
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email address"
                                {...register('email', {
                                    required: 'Email is required'
                                })}
                                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required'
                                })}
                                className={`appearance-none rounded-lg relative block w-full px-3 py-2 pr-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-8 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="role" className="">
                                Role
                            </label>
                            <select
                                id="role"
                                {...register('role', {
                                    required: 'Please select a role',
                                })}
                                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${errors.role ? 'border-red-500' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            >
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.role && (
                                <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className='text-sm'>Already have an acount? <Link to={"/login"} className='text-blue-500'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register; Register