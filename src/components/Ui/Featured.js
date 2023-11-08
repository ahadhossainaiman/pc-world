
import Link from 'next/link';
import React from 'react';

const Featured = ({ allCategory}) => {
    console.log( allCategory);
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='flex justify-center text-3xl font-medium text-black my-5'>Featured Category</h1>
            <div className='grid lg:grid-cols-7  gap-5'>
            {
                allCategory.map((category)=>{
                    return <>
                    <Link href={`categories/${category.path}`}>
                        <div className='p-5 border rounded-md my-5'>
                            <div className='w-[80%] mx-auto'>
                               <img src={category.url} alt="" />
                            </div>
                            <h1 className='flex justify-center mt-5 uppercase text-black'>{category.value}</h1>
                           
                        </div>
                        </Link>
                    </>
                })
                
            }
            </div>
        </div>
    );
};

export default Featured;


