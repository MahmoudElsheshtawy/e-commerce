import React from 'react'

const Card = ({listname,handledelete }) => {
    const Card = listname.map(({name ,age ,favoritColor ,tall,type,id})=>(
        <div className="card" key={id} style={{backgroundColor : type==="girl"?"pink":"green"  }}>
         <div>My name:  {name}</div>
         <div>My age:  {age}</div>
         <div>My favoritColor:  {favoritColor}</div>
         <div>My hight: {tall}</div>
         <button className="btn-1" onClick={(e)=>handledelete(e,id)}>x</button>
       
        </div>
       
      ));
  return (
    <div>{Card}</div>
    
  )
}

export default Card