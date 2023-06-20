import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = ({list}) => {
    // console.log(list)
    const {id}=useParams()
    // console.log(id)
    const item=list.find(el=>el.id==id)
    console.log(item)
  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.pic}  />
        <p>{item.price}</p>

<Link to="/">

<p>Home</p>
</Link>    </div>
  )
}

export default Details