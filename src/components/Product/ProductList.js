import React, {useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../actions/productActions';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts(0));
    }, []);

    const handleScroll = useCallback(() => {  
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight == scrollHeight ) {
            dispatch(fetchProducts(products.length));
        }
    }, [products]);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className='grid md:grid-cols-4 ms:grid-cols-1 lg:grid-cols-6 jsutify-between'>
            {products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)}
        </div>
    );
}

export default ProductList;