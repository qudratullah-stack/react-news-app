import React from "react";

export default function NewItem(props) {
  return (
    <>
      <div
        className="item"
        style={{ backgroundColor: props.mode ? "#6c6767" : "#ffffff" ,
          color: props.mode? 'white':'black'
        }}
      >
        <img src={props.image?props.image:'https:media.zenfs.com/en/benzinga_79/92cc4454d4ed171c66a92a11a43cb1ef'} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
         <a href={props.url} target="_blank"><button>Read More</button></a>
        
      </div>
    </>
  );
}
