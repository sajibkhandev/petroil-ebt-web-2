import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <div className={`py-[14px] px-[41px] bg-[#F40404] ${className} `}>{btnText}</div>
  )
}

export default Button