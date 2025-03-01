import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const Increment=()=>
  {
    setCount(count+1);
  }
 const decrement=()=>
 {
    setCount(count-1);
 }

 const Reset=()=>{
    setCount(0);
 }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h1>
        <div className="bg-gray-200 py-4 px-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Count: {count}</h2>
          <div className="flex gap-3 mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"onClick={Increment}>+</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"onClick={decrement}>-</button><button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"onClick={Reset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
