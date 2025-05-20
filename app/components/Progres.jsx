"use client";
import React, { useEffect, useState } from "react";

const Progres = ({ progress }) => {
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(progress);
    }, 100);

    return () => clearTimeout(timer); // cleanup
  }, [progress]);

  return (
    <div className="w-full max-w-md  m-5  border-2 border-black rounded-sm h-8">
      <div
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={animated}
        className="h-full bg-green-600 text-white flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          width: `${animated}%`,
          color: animated < 5 ? "black" : "white",
        }}
      >
        {animated}%
      </div>
    </div>
  );
};

export default Progres;
