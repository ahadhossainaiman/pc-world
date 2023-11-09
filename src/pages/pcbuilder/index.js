import RootLayouts from '@/components/Layouts/RootLayouts';
import { resetCategories, setCategories } from '@/redux/features/pcBuilder/pcBuilderSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PcBuilderPage = ({categories}) => {
    const dispatch = useDispatch();
    const {itemCategories,sum,fullFill} = useSelector((state)=>state. pcBuilder)
    console.log(itemCategories);
    dispatch(setCategories({
        categories
    }))
    const handleRemove = (path) => {
        dispatch(removeProduct({
          category: path
        }))
      }
    return (
        <>
        <section>
            <div className='max-w-[80%] mx-auto py-8 px-5'>
                <p className='flex justify-center text-3xl font-bold text-black my-10'>Select Components</p>
                <div className=''>
                    <table className='lg:w-1/2  mx-auto border-gray-200 border'>
                    <thead className='text-left text-xs md:text-base bg-gray-800 text-white'>
                <tr>
                  <td className="px-6 py-3">Image</td>
                  <td className="px-6 py-3">Product Name</td>
                  <td className="px-6 py-3">Price</td>
                  <td className="px-3 py-3">Actions</td>
                </tr>
              </thead>
                        <tbody>
                            {
                                itemCategories.map((item,index)=>{
                                    return <tr key={index} className='border-b-2'>
                                    <td class="px-6 py-3 ">
                                      <div className=''>
                                        {
                                          item?.productImage === "" ? <img src={item.url.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" /> : <img src={item?.productImage.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" />
                                        }
                                      </div>
                                    
                                    </td>
                                    <td class=" px-6 py-3">
                                      <div>
                                        <p className='my-1 text-xs md:text-sm'>{item.value} {index + 1 < 7 && <span className='text-base text-red-600'>*</span>}</p>
                                        {
                                          item?.productName !== "" ? <Link href={`/product/${item?.productId}`} className='text-sm text-green-500 font-semibold no-underline'>{item.productName}</Link> : <p className='bg-gray-200 py-1'></p>
                                        }
                                      </div>
                                    </td>
                                    <td class=" px-6 py-3">
                                      {
                                        item.price !== "" ? <p className='text-sm'>{item.price} &#2547;</p> : <p className='bg-gray-200 py-1'></p>
                                      }
                                    </td>
                                    <td class="px-6 py-3">
                                      <div>
                                        {
                                          item?.productImage !== "" && item?.productName !== "" && item?.price !== "" ? <div onClick={() => handleRemove(item?.path)}> <button className='bg-red-900 hover:bg-red-700 hover:scale-105 transition-all text-white border-0 py-1 px-3 text-sm rounded-[4px] cursor-pointer'>X</button></div> : <Link href={`/pcbuilder/${item?.path}`}>
                                            <button className='bg-blue-900 hover:bg-blue-700 hover:scale-105 transition-all text-white border-0 py-1 px-3 text-sm rounded-[4px] cursor-pointer'>Choose</button>
                                          </Link>
                                        }
                                      </div>
                                    </td>
                                  </tr>
                                })
                            }
                        </tbody>
                        <tfoot>
                <tr style={{
                  backgroundColor: "#e5e5e5"
                }}>
                  <td colSpan={2} className='text-right py-3 px-4'>
                    <p className='font-bold'>Total Price:</p>
                  </td>
                  <td>
                    {
                      sum !== "" ? <p className='text-base text-center font-medium'>{sum} &#2547;</p> : <p className='bg-gray-200 py-1'></p>
                    }
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    {
                      fullFill > 5 ? <div className='py-4 px-4 flex justify-end'> <button onClick={() => {
                        dispatch(
                          resetCategories()
                        )
                        dispatch(setCategories({
                          categories
                        }))
                        // toast.success("Congratulations! Your build has been completed successfully 🚀")
                      }} className='bg-green-900 hover:bg-green-700 hover:scale-105 transition-all text-white border-0 py-2 px-5 text-base rounded-[4px] cursor-pointer w-fit'>Complete Build</button></div> :
                        <div className='py-4 px-4 flex justify-end'> <button className='bg-gray-300 hover:bg-gray-300 transition-all text-slate-500 cursor-not-allowed border-0 py-2 px-5 text-base rounded-[4px] w-fit'>Complete Build</button></div>
                    }
                  </td>
                </tr>
              </tfoot>
                    </table>
                </div>
            </div>
        </section>
      

        </>
    );
};

export default  PcBuilderPage;

PcBuilderPage.getLayout = function (page){
    return <RootLayouts>{page}</RootLayouts>
}

export const getServerSideProps = async () =>{
    const res = await fetch('https://pcwhizbuilder-server.vercel.app/categories')
    const data = await res.json();
    return {
        props:{
            categories:data
        }
    }
}