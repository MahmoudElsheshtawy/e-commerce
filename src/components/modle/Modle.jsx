import React, { Fragment } from 'react'
import styles from './Modle.module.css'
import ReactDOM  from 'react-dom'
// import Adduser from '../adduser/Adduser';






const Backdrop= ({handlemodle,modle})=>{
    return (
    
    <div className={`${styles.backdrop} ${modle ? styles.modle :null} `} onClick={()=>handlemodle()}>
       </div>
    )}; 
const Overlay = ({  modle,children }) => {

      return (
        <div className={`${styles.ovarlay} ${modle ? styles.modle : ""}`}>
        {children}
        </div>
      );
    };

// 
const Modle = ({modle,handlemodle,children }) => {
 
  return (
    // modle &&(
  <Fragment>
    {ReactDOM.createPortal(
        <Fragment> 

           <Backdrop handlemodle={handlemodle} modle={modle}/>
           
           <Overlay handlemodle={handlemodle} modle={modle} >{children}</Overlay>
            
           
      
        </Fragment>,
        document.getElementById('Modle')
    )}
  
  
  </Fragment>
    // )

 
  );
};

export default Modle