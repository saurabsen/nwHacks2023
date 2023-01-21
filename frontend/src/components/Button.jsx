import React from 'react'

export const Button = (props) => {
  return (
    <div>
      <a href={props.href}>
        {props.btnName}
      </a>
    </div>
  )
}
