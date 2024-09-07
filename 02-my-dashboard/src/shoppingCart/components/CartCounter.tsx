'use client'
import { useState } from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0 }:Props) => {
    const [count, setCount] = useState(value);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleMinus = () => setCount((prev) => prev - 1);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={handleIncrement}
        >
          +1
        </button>
        <button 
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={handleMinus}
        >
          -1
        </button>
       </div>
    </>
  )
}
