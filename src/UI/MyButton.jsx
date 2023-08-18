import React from 'react'
import style from './MyButton.module.css'

const Mybutton = ({props,children}) => {
  return (
    <button className={style.myButton}>{children}</button>
  )
}

export default Mybutton