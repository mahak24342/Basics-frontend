'use client'
import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Accord = ({ items }) => {
  const [active, setActive] = useState(null)

  const handleToggle = (index) => {
    setActive(active === index ? null : index)
  }

  if (!items || items.length === 0) {
    return <p>No items Available</p>
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleToggle(index)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {item.title}
            {active === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {active === index && (
            <div>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accord
