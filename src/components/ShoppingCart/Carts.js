import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCarts } from '../../actions/productActions';

function Carts () {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.product.carts);
    
    const handleButtonClick = (index) => {
        dispatch(deleteCarts(index));
    };

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">No</th>
                            <th scope="col" className="px-6 py-4">Title</th>
                            <th scope="col" className="px-6 py-4">Price</th>
                            <th scope="col" className="px-6 py-4">Count</th>
                            <th scope="col" className="px-6 py-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart,index) => (
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cart.product.title}</td>
                                <td className="whitespace-nowrap px-6 py-4">${cart.product.price}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cart.value}</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                                        onClick={() => handleButtonClick(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Carts;