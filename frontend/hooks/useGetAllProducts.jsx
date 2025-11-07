import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'sonner';

const useGetAllProducts = () => {
    const axiosPublice = useAxiosPublic();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect( () =>{
        setLoading(true)
        axiosPublice.get('/product/all-products')
        .then(result =>{
            setProducts(result?.data?.data);
            setLoading(false);
        })
        .catch(error =>{
            console.log(error);
            toast.error(error.response.data.message);
        })
    }, [])
    return {products, loading};
}

export default useGetAllProducts;