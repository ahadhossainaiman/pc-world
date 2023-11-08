/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Rating from 'react-rating';
import ReactStars from "react-rating-stars-component";

const Cart = ({product}) => {
    console.log(product);
    const firstExample = {
        size: 30,
        value: product.rating,
        edit: false
      };
    return (
        <div  className='border-2 border-gray-300 p-3 relative rounded-md'>
            <img src={product.image.slice(1)} alt="product" className='w-[70%] bg-slate-100 mx-auto my-5' />
            <div>
                <h1 className='text-black font-bold text-2xl'>{ product.productName.length>20?`${product.productName.slice(0,20)}...`:product.productName}</h1>
                <p className='py-2'>{product.category}</p>
                <div className='flex justify-between py-1'>
                    <p className='text-xl font-medium text-black '>{product.price}</p>
                    <p className={product.status==="In Stock"?"text-green-500":"text-red-500"}>{product.status}</p>
                </div>
                <ReactStars {...firstExample} />     
            </div>
            <div className='w-full bg-red-500 py-2 rounded-md'>
            <Link href={`/product/${product._id}`} className=' text-white flex font-medium justify-center  mx-auto'>View Details </Link>
            </div>
            
        </div>
    );
};

export default Cart;