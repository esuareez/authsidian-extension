import { useState } from "react";

export default function Tabs() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-[20rem] min-h-[32rem] bg-red-700 flex flex-col gap-5 justify-center items-center">
      <button
        className="w-44 h-12 bg-pink-300 text-white font-bold rounded-md flex justify-center items-center"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Count + 1
      </button>
      <h1 className="text-center text-black font-bold">{count}</h1>
    </div>
  );
}
