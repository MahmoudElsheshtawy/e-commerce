
import {React,useState} from 'react'

const App = () => {
  const [name , setname]= useState({
 
    firstname:"",
    lastname:""
  })
  
     
     
  return (
    <div className='App'> 
    <input type='text' placeholder='Fname'value={name.firstname} onChange={(e)=>setname({...name, firstname: e.target.value})} />
    <h1>firstname:{name.firstname}</h1> 

    <input type='text' placeholder='Fname'value={name.lastname} onChange={(e)=>setname({...name , lastname: e.target.value})}/>
    <h1>lastname:{name.lastname}</h1>
    

    </div>
  )
}

export default App


