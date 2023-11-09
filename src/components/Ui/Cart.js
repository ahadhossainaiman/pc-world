/* eslint-disable @next/next/no-img-element */
import { addProduct } from '@/redux/features/pcBuilder/pcBuilderSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Rating from 'react-rating';
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux';

const Cart = ({product}) => {
    console.log(product);
    const route = useRouter();
    const dispatch = useDispatch();
    console.log(route.asPath.match('pcbuilder'));
    const firstExample = {
        size: 30,
        value: product.rating,
        edit: false
      };
      const handleAdd = () =>{
        dispatch(addProduct(
            {
                productImage:product.image,
                productName:product.productName,
                price:product.price,
                category:product.category,
                productId: product._id
            }
        ))
        route.push('/pcbuilder')
      }
    return (
        <div  className='border-2 flex-wrap border-gray-300 h-fit  p-3 relative rounded-md'>
            <img src={product.image.slice(1)} alt="product" className='w-[70%] h-[70%] bg-slate-100 mx-auto my-5' />
            <div>
                <h1 className='text-black font-bold text-2xl'>{ product.productName.length>20?`${product.productName.slice(0,20)}...`:product.productName}</h1>
                <p className='py-2'>{product.category}</p>
                <div className='flex justify-between py-1'>
                    <p className='text-xl font-medium text-black '>{product.price}</p>
                    <p className={product.status==="In Stock"?"text-green-500":"text-red-500"}>{product.status}</p>
                </div>
                <ReactStars {...firstExample} />     
            </div>
           
                {
                    route.asPath.match('pcbuilder')? <div className='w-full no-underline'>
                    <button onClick={() => handleAdd()} className='bg-lime-500 border-0 py-2 text-base flex justify-center gap-3 items-center px-8 w-full rounded-[6px] text-white cursor-pointer hover:bg-lime-500 hover:scale-105 transition-all'>Add To Builder
                    </button>
                    </div>: <div className='w-full bg-red-500 py-2 rounded-md'> <Link href={`/product/${product._id}`} className=' text-white flex font-medium justify-center  mx-auto'>View Details </Link> 
            </div>
                }
          
            
        </div>
    );
};

export default Cart;