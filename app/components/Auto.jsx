'use client'
import React, { useEffect, useState } from 'react'

const Auto = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');
const[show,setShow]=useState(false);
const[cache,setChache]=useState({});

  const fetchData = async () => {
    if (!input.trim()) {
      setResult([]);
      return;
    }
    if(cache[input]){
      setResult(cache[input]);
      return;
    }
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await res.json();
    setResult(json?.recipes || []);
    setChache(prev=>({...prev,[input]:json?.recipes}));
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 300); // debounce for 300ms

    return () => clearTimeout(delayDebounce);
  }, [input]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">AutoComplete Search</h2>
        <input
          type="text"
          placeholder="Search recipes..." onFocus={()=>setShow(true)}
onBlur={()=>setShow(false)}          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {show && (
        <div className="mt-4 bg-white rounded-lg shadow divide-y divide-gray-200">
          {result.map((r) => (
            <div
              key={r.id}
              className="p-3 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {r.name}
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Auto;
