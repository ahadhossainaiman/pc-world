import RootLayouts from "@/components/Layouts/RootLayouts";
import Cart from "@/components/Ui/cart";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HomePage = ({ allProducts }) => {
// console.log(allProducts);
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <Slider/> */}
        <h1 className="text-5xl font-bold uppercase text-green-500 text-center py-10">Featured Products</h1>
        <div className="grid lg:grid-cols-3 gap-4 w-[80%] mx-auto my-10">
          {allProducts.map((product) => (
              <Cart key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pcwhizbuilder-server.vercel.app/products");
  const data = await res.json();
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  data.length = 6
  return {
    props: {
      allProducts: data,
      
    },
    // revalidate: 1,
  };
};
