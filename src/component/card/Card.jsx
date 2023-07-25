import React from 'react'

const Card = ({listname,handledelete }) => {
    const Card = listname.map(({name ,age ,favoritColor ,tall},idx,e)=>(
        <div className="card" key={idx} >
         <div>My name:  {name}</div>
         <div>My age:  {age}</div>
         <div>My favoritColor:  {favoritColor}</div>
         <div>My hight:  {tall}</div>
         <button className="btn-1" onClick={()=>handledelete(e,idx)}>x</button>
       
        </div>
       
      ));
  return (
    <div>{Card}</div>
    
  )
}

export default Card