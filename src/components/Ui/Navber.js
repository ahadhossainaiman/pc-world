import Link from "next/link";
import React from "react";

const Navber = () => {
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
                  <a>CPU / Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
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
                  <a>CPU / Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </details>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#284399]">PC BUILDER</a>
      </div>
    </div>
  );
};

export default Navber;
