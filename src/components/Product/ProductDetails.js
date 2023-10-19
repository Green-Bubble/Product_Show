import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCarts } from '../../actions/productActions';

const ProductDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const product = products.find((product) => product.id == id);
    const [value, setValue] = useState(1);

    if(!product) {
        return <div>Product not found</div>
    }

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleButtonClick = () => {
        dispatch(addCarts({product, value}));
    };

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
                    <div className='lg:w-96 md:w-96 mt-12 border rounded p-2 mb-4'>
                        <p className="mt-2 text-slate-500">Total Cost : ${product.rating.count * value}</p>
                        <input
                            type="number"
                            min={1}
                            max={product.rating.count}
                            value={value}
                            onChange={handleInputChange}
                            className="border rounded p-2 mt-2"
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                            onClick={handleButtonClick}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;