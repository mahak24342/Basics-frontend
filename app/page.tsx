import React from 'react'
import Todo from '@/app/components/Todo'
import OneMore from './components/OneMore'
import Progres from '@/app/components/Progres'
const page = () => {
  return (
    <div>
<Progres progress={40}/>
<Progres progress={90}/>
    </div>
  )
}

export default page
