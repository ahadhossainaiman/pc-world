/* eslint-disable react/jsx-key */
import RootLayouts from '@/components/Layouts/RootLayouts';
import Image from 'next/image';
import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductId = ({product , key}) => {
    const firstExample = {
        size: 30,
        value: product.rating,
        edit: false
      };
      console.log(product?.image);
    return (
        <div key={key} className='mb-10'>
            <div className='grid lg:grid-cols-2 gap-5 items-center border-b-2 border-black w-[80%] mb-5 mx-auto'>
                <div className='lg:w-[50%] mx-auto'>
                <img src={product.image.slice(1)} className='w-full h-full' alt="product" />
                </div>
                <div className=' my-5'>
                    <p className='text-3xl text-black font-medium'>{product.productName}</p>
                    <p className='text-xl'>{product.category}</p>
                    <div className='flex items-center gap-3'>
                    <ReactStars {...firstExample} /> <span className='text-xl text-black'>{product.rating}</span> 
                    </div>
                   
                    <p className='text-xl text-black font-medium'>{product.price} <small className='text-3xl'>৳</small></p>
                    <p className={product.status === "Out of Stock"?"text-red-700":"text-green-600"}>{product.status}</p>
                    <div className='my-5'>
                    <button className='bg-gray-200  p-2 text-4xl text-white rounded-md'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/minus-math.png" alt="minus-math"/></button> <span className='text-3xl mx-3 text-black font-bold'>{0}</span>  <button className='bg-gray-200 p-2 text-3xl text-white rounded-md'><img className='text-white' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/plus-math.png" alt="plus-math"/></button>
                    </div>
                    <button className='bg-red-500 px-20 py-2 text-2xl text-white rounded-md font-medium'>Add to Cart</button>
                </div>
                
            </div>
            <div className='w-[80%] mx-auto mt-3 pb-10 border-b-2 border-black'>
                    <h1 className='text-2xl text-black font-bold '>Key Features:</h1>
                    {
                        Object.entries(product.keyFeatures).map((featrure,index)=>{
                            return  <p className='my-2 text-black font-bold' key={index}>{featrure[0]}: <span className='font-normal'>{featrure[1]}</span></p>
                        })
                    }
                   
        
            </div>
            <div className='w-[80%] mx-auto mt-3 pb-10 border-b-2 border-black'>
                <h1 className='text-2xl text-black font-bold'>Product Description:</h1>
                <p className='text-justify my-3'>{product.description}</p>
            </div>
            <div className='w-[80%] mx-auto mt-3 border-b-1 border-black'>
                <h1 className='text-2xl text-black font-bold'>Reviews:</h1>
                {
                    product.reviews.map((review)=>{
                        return (<div className='my-10 border-b-2 pb-5'>
                            <p>{review.username} - <span>{review.date}</span></p>
                            <h1 className='text-xl text-black font-bold'>{review.comment}</h1>
                            <div className='flex items-center'>
                            <ReactStars { ...{size: 20,
        value: review.rating,
        edit: false}} /> <span className=' text-black'>({review.rating})</span>
        </div>
                        </div>)
                    })
                }
            </div>
     
        </div>
    );
};
export default ProductId;
ProductId.getLayout = function (page) {
    return <RootLayouts>{page}</RootLayouts>
}

export const getStaticPaths = async ()=>{

    const res =  await fetch( `https://pcwhizbuilder-server.vercel.app/products`)
    const data = await res.json();
    const paths = data.map((product)=>({
        params:{
            productId:product._id
        }
    }))
    return {paths,fallback:false}
}

export const getStaticProps = async (context)=>{
    const {params} = context;
    console.log(params.productId);
    const res = await fetch (`https://pcwhizbuilder-server.vercel.app/products/${params.productId}`);
    const data = await res.json();
console.log(data)
    return {
        props:{
            product:data
        }
    }

}

