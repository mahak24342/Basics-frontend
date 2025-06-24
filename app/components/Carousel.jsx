"use client";

import React, { useEffect, useState } from 'react';

const data = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
];

const Carousel = () => {
  const [active, setActive] = useState(0);

  const nextClick = () => {
    setActive((active + 1) % data.length);
  };

  const prevClick = () => {
    setActive(active === 0 ? data.length - 1 : active - 1);
  };

  useEffect(()=>{
const timer=setTimeout(()=>{
nextClick();
},5000)
return ()=>{
  clearTimeout(timer);
}  
},[active]);


  return (
    <div className='flex flex-col items-center gap-4'>
      <button onClick={prevClick} className='px-4 py-2 bg-gray-300 rounded'>Prev</button>
      {data.map((url, i) => (
        <img
          key={url}
          src={url}
          alt={`Slide ${i + 1}`}
          className={`w-96 h-[500px] object-contain ${active === i ? 'block' : 'hidden'}`}
        />
      ))}
      <button onClick={nextClick} className='px-4 py-2 bg-gray-300 rounded'>Next</button>
    </div>
  );
};

export default Carousel;
