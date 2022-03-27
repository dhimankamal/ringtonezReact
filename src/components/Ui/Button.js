import React from 'react'

export default function Button (props) {


  return (
    <>
      <div className='loadmore text-center'>
        <button onClick={props.onclick}>{props.name}</button>
      </div>
    </>
  )
}
