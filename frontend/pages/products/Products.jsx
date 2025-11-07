import useGetAllProducts from '../../hooks/useGetAllProducts';

const Products = () => {
    const { products, loading } = useGetAllProducts();
    // console.log(products);
    if(loading){
        return <p className='text-center text-blue-500 text-sm mt-10'>Loading...</p>
    }
    return (
        <div className='flex items-center gap-5'>
            {
                products.map(product =>
                    <div key={product?._id} className="flex items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                            <div className="mt-3">
                                <p className="text-gray-800 font-medium">
                                    Price: <span className="text-green-600">${product.price}</span>
                                </p>
                                <p className="text-gray-800 font-medium">
                                    Quantity: <span className="text-blue-600">{product.quantity}</span>
                                </p>
                                <p className="text-gray-800 font-medium">
                                    Location: <span className="text-purple-600">{product.location}</span>
                                </p>
                            </div>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Products;