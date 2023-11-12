import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navber = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Category</a>
              <ul className="p-2">
                <li>
                <Link href={`/categories/cpu-processor`}>CPU / Processor</Link>
                </li>
                <li>
                <Link  href={`/categories/cpu-processor`}>Motherboard</Link>
                </li>
                <li>
                <Link  href={`/categories/ram`}>RAM</Link>
                </li>
                <li>
                <Link href={`/categories/power-supply-unit`}>Power Supply Unit</Link>
                </li>
                <li>
                <Link href={`/categories/storage-device`}>Storage Device</Link>
                </li>
                <li>
                <Link href={`/categories/monitor`}>Monitor</Link>
                </li>
                <li>
                <Link href={`/categories/others`}>Others</Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
        <Link href='/' className="btn btn-ghost normal-case text-xl">PC-WORLD</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href='/'>HOME</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className="p-2 w-[200%]">
              <li>
                  <Link href={`/categories/cpu-processor`}>CPU / Processor</Link>
                </li>
                <li>
                  <Link  href={`/categories/cpu-processor`}>Motherboard</Link>
                </li>
                <li>
                  <Link  href={`/categories/ram`}>RAM</Link>
                </li>
                <li>
                  <Link href={`/categories/power-supply-unit`}>Power Supply Unit</Link>
                </li>
                <li>
                  <Link href={`/categories/storage-device`}>Storage Device</Link>
                </li>
                <li>
                  <Link href={`/categories/monitor`}>Monitor</Link>
                </li>
                <li>
                  <Link href={`/categories/others`}>Others</Link>
                </li>
              </ul>
            </details>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end">
        {
          session &&  <img src={session?.user?.image} className="w-10 h-10 rounded-full mx-5" alt="" />
        }
       
        <Link href="/pcbuilder" className="btn border-1 border-white text-white hover:border-blue-500">
  PC BUILDER
  </Link>
  {
    session &&  <button onClick={() => signOut(
   {
    callbackUrl:"https://pc-word-client.vercel.app/"
   }
    )} className=" mx-5 text-red-500">Sign Out</button>
  }
 
      </div>
    </div>
  );
};

export default Navber;
