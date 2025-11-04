import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-2 bg-gray-300'>
            <Link to={"/"} className='text-2xl font-semibold text-gray-700'>AUTH</Link>
            <ul className='flex gap-5 items-center'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/add-product"}>Add Product</Link></li>
            </ul>
            <Link className='bg-blue-500 text-white rounded-lg px-2 py-1' to={'/login'}>Login</Link>
        </div>
    );
};

export default Navbar;