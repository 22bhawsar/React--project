import React from 'react'
import style from './InputControl.module.css'


function InputControl(props) {
  return (
    <div className={style.container}>
        {props.lable && <lable>{props.lable}</lable>}
        
        <input type="text" {...props} />
    </div>
  )
}

export default InputControl
