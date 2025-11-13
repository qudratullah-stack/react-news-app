import React from 'react'
import New_Item from './New_item'
export default function News_Parent() {
    const items = [1,2,3,4,5]
  return (
    <div>
      {items.map(index => (
        <New_Item key={index}/>
   ))}
    </div>
  )
}
