import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'sonner';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null)
        toast.success("Logout successfully!");
    }
    return (
        <div className='flex justify-between items-center px-10 py-2 bg-gray-300'>
            <Link to={"/"} className='text-2xl font-semibold text-gray-700'>AUTH</Link>
            <ul className='flex gap-5 items-center'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/add-product"}>Add Product</Link></li>
            </ul>
            {
                user ?
                    <div className='flex items-center gap-3'>
                        <div>
                            <h3 className='text-lg text-blue-600'>{user?.name}</h3>
                            <h3 className='text-sm text-blue-400'>{user?.role}</h3>
                        </div>
                        <button onClick={handleLogout} className='bg-blue-500 text-white rounded-lg px-2 py-1 cursor-pointer'>Logout</button>
                    </div>
                    :
                    <Link className='bg-blue-500 text-white rounded-lg px-2 py-1' to={'/login'}>Login</Link>
            }
        </div>
    );
};

export default Navbar;