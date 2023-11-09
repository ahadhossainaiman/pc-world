import RootLayouts from '@/components/Layouts/RootLayouts';
import Cart from '@/components/Ui/Cart';
import { useRouter } from 'next/router';
import React from 'react';

const FeaturedCategoriesPage = ({products}) => {
    console.log(products);
    const {query} = useRouter();
    console.log(query.categoriesId);
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl my-5 uppercase text-black flex justify-center font-medium'>{query.categoriesId}</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                   products.map((product,index)=>{
                        return <Cart key={index} product={product}/>
                    })
                }

            </div>
        </div>
    );
};

export default FeaturedCategoriesPage;
FeaturedCategoriesPage.getLayout = function (page){
    return <RootLayouts>{page}</RootLayouts>
}

export const getStaticPaths = async () =>{
    const res = await fetch('https://pcwhizbuilder-server.vercel.app/categories')
    const data = await res.json();
    const paths = data.map((category)=>({params:{
        categoriesId:category.path
    }}))
    return {
        paths,fallback:false
    } 
}

export const getStaticProps = async (context)=>{
    const {params} = context;
    const res = await fetch(`https://pcwhizbuilder-server.vercel.app/categories/${params?.categoriesId}`)
    const products = await res.json();
    return {
      props: {
        products
      },
      revalidate: 10,
    }
}