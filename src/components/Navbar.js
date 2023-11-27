'use client'
import React from 'react'
import Image from 'next/image'
import Link from  'next/link'
import { ImCross } from "react-icons/im";
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { useRef } from 'react';

 

const Navbar = () => {
  
  const toggleCart=()=>{
if(ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-full')
  ref.current.classList.add('translate-x-0')
}
else
  if(!ref.current.classList.contains('translate-x-full')){
    ref.current.classList.remove('translate-x-0')
    ref.current.classList.add('translate-x-full')
  
}
  }
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center border-2 py-2 shadow-md">
      <div className="logo mx-5">
      <Link href={'/'}><Image width={50} height={20} src="/img/logo.png" alt=""/></Link> 
      </div>
  <div className="nav">
    <ul className="flex items-center space-x-5 font-bold md:text-xl">
   <Link href='/Tshirt'><a><li>Tshirt</li></a> </Link>
   <Link href='/Hoodies'><a><li>Hoodies</li></a> </Link>
   <Link href='/Strickers'><a><li>Strickers</li></a> </Link> 
   <Link href='/Mugs'><a><li>Mugs</li></a> </Link>
    </ul>
  </div>
     <div  onClick={toggleCart} className=" cursor-pointer cart absolute right-0 top-4 mx-5">
     <MdAddShoppingCart className="text-xl md:text-3xl"/>
      </div> 
      <div ref={ref} className=" w-72  h-full sideCart absolute top-0 right-0 bg-pink-200 px-6 py-10 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-pink-500">
          <ImCross />
          </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="flex item my-5">
            <span className="w-2/3 font-semibold  bg-red-50">T-shirt - wear the code </span>
            <span className="flex items-center justify-center w-1/3 bg-green-50">
         <FaMinus className="cursor-pointer text-pink-500"/> <span className="mx-2 text-smx">1</span>
         <FaPlus className="cursor-pointer text-pink-500" /></span>
            </div>
          </li>
          <li>
            <div className="flex item my-5">
            <span className="w-2/3 font-semibold  bg-red-50">T-shirt - wear the code </span>
            <span className="flex items-center justify-center w-1/3 bg-green-50">
         <FaMinus className="cursor-pointer text-pink-500"/> <span className="mx-2 text-smx">1</span>
         <FaPlus className="cursor-pointer text-pink-500" /></span>
            </div>
          </li>
          <li>
            <div className="flex item my-5">
            <span className="w-2/3 font-semibold  bg-red-50">T-shirt - wear the code </span>
            <span className="flex items-center justify-center w-1/3 bg-green-50">
         <FaMinus className="cursor-pointer text-pink-500"/> <span className="mx-2 text-smx">1</span>
         <FaPlus className="cursor-pointer text-pink-500" /></span>
            </div>
          </li>
          <li>
            <div className="flex item my-5">
            <span className="w-2/3 font-semibold  bg-red-50">T-shirt - wear the code </span>
            <span className="flex items-center justify-center w-1/3 bg-green-50">
         <FaMinus className="cursor-pointer text-pink-500"/> <span className="mx-2 text-smx">1</span>
         <FaPlus className="cursor-pointer text-pink-500" /></span>
            </div>
          </li>
          <li>
            <div className="flex item my-5">
            <span className="w-2/3 font-semibold  bg-red-50">T-shirt - wear the code </span>
            <span className="flex items-center justify-center w-1/3 bg-green-50">
         <FaMinus className="cursor-pointer text-pink-500"/> <span className="mx-2 text-smx">1</span>
         <FaPlus className="cursor-pointer text-pink-500" /></span>
            </div>
          </li>
         
       </ol>
       <div className="flex">
        <button className="flex mx-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"> <IoBagCheckSharp className="mt-1"/>Checkout</button>
        <button className="flex mx-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"> Clear Cart</button>
       </div>
      </div>
    </div>
  )
}

export default Navbar
