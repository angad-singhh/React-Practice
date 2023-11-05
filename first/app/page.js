"use client"

import React, { useState } from 'react'
import Header from '@/Components/Header'


const page = () => {
  const [name, setname] = useState("angad")

  return (
    <>
    <Header name={name}/>
    <div>
      <h1>{name}</h1> 
      <button onClick={()=>{
        setname("angad singh")
      }}>
        Click
      </button>
    </div>

    </>
  )
}

export default page