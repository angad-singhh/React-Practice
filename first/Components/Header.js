import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <div>Hi from Header {props.name} 
    <h1>
    one</h1>
    <h1><Link href="/About">Click Here</Link></h1>
    </div>
  )
}

export default Header