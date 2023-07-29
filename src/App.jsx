import { useState, } from "react";
import Card from "./component/card/Card";
import Test from "./component/test/Test";

const App = () => {
  // const inputEl =useRef(null)
const [dleter ,setdleter]=useState(true);
// data
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

// x


const handledelete=(idx,clre)=>{
       const deletett=state.filter((e,idx)=>idx !== clre);
       setState(deletett)


console.log(deletett)

}

///////////////////\\\\//////////////////////////////////

// const change =()=>{
  // eslint-disable-next-line no-lone-blocks
  
  // console.log(inputEl.current.value)
// }

// const click =()=>{

//   inputEl.current.focus();

// }


const testnames = (names)=>{

  console.log(names)
}









    
  return (
    <div className='App'> 
       <div className="container">
       <Test testnames={testnames}/>
        <h1>
         my: 
        </h1>
        <button onClick={()=>setdleter(!dleter)}>
          {dleter ?"hideName" :"showNmae"}
        </button>
        {/* <button onClick={()=>setdleter(!dleter)}>{ dleter ? "hide-name" : "show-name"}</button> */}
        <div className={ dleter ? "show" :"hide"}>
        <Card listname={state} type="men" handledelete={handledelete}/>
        </div>
       
       </div>
     
    </div>
  );
};
export default App


