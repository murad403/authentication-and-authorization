import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import AddProducts from "../pages/add-products/AddProducts";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {path: "/", element: <Home></Home>},
            {path: "/products", element: <Products></Products>},
            {path: "/add-product", element: <AddProducts></AddProducts>}
        ]
    },
    { path: "/login", element: <Login></Login> },
    { path: "/register", element: <Register></Register> }
])

export default router;