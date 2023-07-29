import React, { useState } from 'react'



const Test = ({testnames}) => {
    const [test ,setTest]= useState("")

  const testhandler =(e)=>{
    const names = e.target.value
    setTest(names)
    testnames(names)

    // if (name.length ===  10) {
    //   return alert("aha")
      
    // }
  }
  return (
    <div>

    <input type="text" 
    placeholder="enter your email" 
    onChange={testhandler}
    value={test}
    />
    <button >click me</button>

    </div>
  )
}

export default Test