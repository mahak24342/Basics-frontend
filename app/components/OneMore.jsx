"use client";
import React, { useState } from "react";

const OneMore = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const Add = () => {
    if (input.trim() === "") return;
    const item = {
      id: todo.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodo((prev) => [...prev, item]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };

  const Toggle = (id) => {
    setTodo(
      todo.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Todo List</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={Add}
          style={{
            padding: "10px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {todo.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #eee",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <input
                type="checkbox"
                onChange={() => Toggle(t.id)}
                checked={t.completed}
              />
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                  marginLeft: "10px",
                  fontSize: "16px",
                  wordBreak: "break-word",
                }}
              >
                {t.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(t.id)}
              style={{
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OneMore;
