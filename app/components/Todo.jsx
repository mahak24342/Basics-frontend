"use client";
import React, { useState } from 'react';

const Todo = () => {
  // Correctly initialized states
  const [todo, setTodo] = useState('');
  const [sun, setSun] = useState('');

  // Called when submit button is clicked
  const handleSubmit = () => {
    setSun(todo);  // Save the typed value to display
    setTodo('');   // Clear the input
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Todo</h2>
      <input
        type="text"
        placeholder="Type here"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>

      {sun && (
        <p style={{ marginTop: '20px', fontSize: '16px' }}>
          ✅ Submitted: <strong>{sun}</strong>
        </p>
      )}
    </div>
  );
};

export default Todo;
