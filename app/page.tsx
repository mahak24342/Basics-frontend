import React from 'react'
import Accord from '@/app/components/Accord'
const page = () => {

  const items = [
  {
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces using components."
  },
  {
    title: "What is a Component?",
    content: "Components are the building blocks of a React application. They return JSX and manage their own state."
  },
  {
    title: "State in React",
    content: "State is used to store data that can change over time and affect how a component renders."
  },
  {
    title: "Props in React",
    content: "Props are used to pass data from one component to another, typically from parent to child."
  },
  {
    title: "Hooks in React",
    content: "Hooks like useState and useEffect allow you to manage state and lifecycle methods in functional components."
  }
];

  return (
    <div>

<Accord items={items}/>      
    </div>
  )
}

export default page
