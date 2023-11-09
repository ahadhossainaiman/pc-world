import RootLayouts from '@/components/Layouts/RootLayouts';
import Cart from '@/components/Ui/Cart';
import { useRouter } from 'next/router';
import React from 'react';

const FeaturesDetails = ({ featureCategory}) => {
    console.log(featureCategory);
    const {query} = useRouter();
    console.log(query.categoriesId);
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl my-5 uppercase text-black flex justify-center font-medium'>{query.categoriesId}</h1>
            <div className='grid lg:grid-cols-3 gap-5 my-5'>
                {
                    featureCategory.map((product,index)=>{
                        return <Cart key={index} product={product}/>
                    })
                }

            </div>
        </div>
    );
};

export default FeaturesDetails;

FeaturesDetails.getLayout = function (page){
    return <RootLayouts>{page}</RootLayouts>
}

export const getStaticPaths = async () =>{
    const res = await fetch('https://pcwhizbuilder-server.vercel.app/categories')
    const data = await res.json();
    // if (5) {
    //     return {
    //       paths: [],
    //       fallback: 'blocking',
    //     }
    //   }

    const paths = data?.map((category)=>({
        params: {
            categoriesId:category.path
        }
    }))
    return {
        paths,fallback:'blocking'
    }
}


export const getStaticProps = async (context) =>{
   const {params} = context;
   console.log(params?.categoriesId);
    const res = await fetch(`https://pcwhizbuilder-server.vercel.app/products`)
    const data = await res.json();
    const filterCategory = data.filter((product)=>{
        return product.category === params.categoriesId
    })
    return {
        props:{
            featureCategory:filterCategory
        }
    }
}