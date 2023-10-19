import React from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductDetails = ( props ) => {
    const {id} = useParams();
    const products = useSelector((state) => state.product.products);
    const product = products.find((product) => product.id == id);

    console.log(id);
    console.log(props)

    if(!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="max-w-md mx-32 bg-white rounded-xl md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="object-cover lg:h-auto ms:w-126 ms:h-auto  md:w-126" src={product.image} alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className="lg:w-96 md:w-96 uppercase tracking-wide text-2xl text-indigo-500 font-semibold">{product.title}</div>
                    <div className='lg:w-96 md:w-96 mt-12'>
                        <h1 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">Description:</h1>
                        <p className="mt-2 text-slate-500">{product.description}</p>
                    </div>
                    <div className='lg:w-96 md:w-96 mt-12'>
                        <h1 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">Category:</h1>
                        <p className="mt-2 text-slate-500">{product.category}</p>
                    </div>
                    <div className='lg:w-96 md:w-96 mt-12'>
                        <h1 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">Count:</h1>
                        <p className="mt-2 text-slate-500">{product.rating.count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;