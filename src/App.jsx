import { useState } from "react";
import Card from "./component/card/Card";
import Test from "./component/test/Test";

const App = () => {

const [state ,setState]=useState
(
  [
  {
    name:"mahmoud",
    age:20,
    favoritColor:"red",
    tall:180,
  },
  {
    name:"osman",
    age:30,
    favoritColor:"red",
    tall:180,
  },
  {
    name:"ali",
    age:50,
    favoritColor:"red",
    tall:180,},]
 )

//array boys
const handledelete =(e,cler)=>{
  const deleteer = state.filter((e ,idx)=>idx !== cler)
  setState(deleteer)
  console.log(deleteer)
// console.log(e.target,idx)

}
// console.log(handledelete)


  return (
    <div className='App'> 
       <div className="container">
        <h1>boys data</h1>
       <Card listname={state} type="men" handledelete={handledelete}/>
      
       <Test/>
       </div>
     
    </div>
  );
};
export default App


