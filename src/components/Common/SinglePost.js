import React from 'react'


export default function SinglePost(props) {

  
  return (
      <>
       <div className="col-md-6 normal-post ">
        <div className="box">
          <img src={props.image} alt="post" />
          <h2>{props.title} </h2>
          <p>
            {props.description}
          </p>
          <div className="date-tags">
            <div className="ftags">
            {props.tags.map((figure,key) => {
              return <a key={key} href="/">{figure}</a>
            })}
            </div>
            <div className="date">{props.date}</div>
          </div>
        </div>
      </div>
      </>
  )
}
