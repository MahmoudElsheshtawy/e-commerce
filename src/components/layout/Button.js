import React from 'react'
import styles from './Form.module.css'

const Button = (props) => {
  return (
    <button style={{margin:"20px", cursor:'pointer'}} className={styles.button}
      onClick={props.onClick}
      type={`${props.type ? props.type :'button'}`}
      
      >
      {props.children}
     
     


    </button>

   


  )
}

export default Button