import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    const { product } = props;
    return (
        <Link to={`/productlist/${product.id}`}>
            <div class=" mb-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
                <img class="mx-auto h-64 object-fill p-4" src={product.image} alt="Hollywood Sign on The Hill" />
                <div class="h-36 p-6">
                    <h5 class="mb-auto mt-auto text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
                        {product.title}
                    </h5>
                </div>
                <div class="h-12  border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                    <small>${product.price}</small>
                </div>
            </div>
        </Link>
    
    );
}

export default ProductCard;