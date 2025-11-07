import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'sonner';

const AddProducts = () => {
    const axiosPublice = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // console.log('Product added:', data, typeof data.price);
        axiosPublice.post('/product/add-product', data)
        .then(result =>{
            toast.success(result.data.message);
            reset();
        })
        .catch(error =>{
            toast.error(error.response.data.message);
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Add New Product
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Fill in the details below to add a product
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Product Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="off"
                                {...register('name', {
                                    required: 'Product name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters',
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="Wireless Headphones"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                {...register('description', {
                                    required: 'Description is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Description must be at least 10 characters',
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="Describe the product..."
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price ($)
                            </label>
                            <input
                                id="price"
                                type="number"
                                step="0.01"
                                min="0"
                                {...register('price', {
                                    required: 'Price is required',
                                    min: {
                                        value: 0.01,
                                        message: 'Price must be greater than 0',
                                    },
                                    valueAsNumber: true,
                                })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="29.99"
                            />
                            {errors.price && (
                                <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                Quantity
                            </label>
                            <input
                                id="quantity"
                                type="number"
                                min="0"
                                {...register('quantity', {
                                    required: 'Quantity is required',
                                    min: {
                                        value: 0,
                                        message: 'Quantity cannot be negative',
                                    },
                                    valueAsNumber: true,
                                })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="5"
                            />
                            {errors.quantity && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.quantity.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                id="location"
                                type="text"
                                {...register('location', {
                                    required: 'Location is required',
                                })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="Dhaka"
                            />
                            {errors.location && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.location.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;