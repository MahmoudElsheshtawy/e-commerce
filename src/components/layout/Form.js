import React from 'react'

import styles from './Form.module.css'


const Form = (props)=>{
return <form onSubmit={props.handleSubmit}>{props.children}</form>


}
const Controller = (props) => {
    
  return (
   
    <div className={styles.Control}>{props.children}</div>
  )
}
Form.Controller =Controller
export default Form