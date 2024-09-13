import React, { useState } from 'react'
import Editor from './components/Editor'
import Features from './components/Features'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Interface = () => {
  const [content,setContent]=useState([])
  return (
    <DndProvider backend={HTML5Backend}> 
    <div className='h-screen w-screen flex flex-row p-4'>
      <Features content={content} setContent={setContent}/>
      <Editor content={content} setContent={setContent}/>
    </div>
    </DndProvider>
  )
}

export default Interface
