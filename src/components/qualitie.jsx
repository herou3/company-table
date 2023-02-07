import React from "react";

const Qualities = (props) => {
  
  return (
    <span 
      key={props._id}
      className={String("m-1 badge rounded-pill bg-" + props.color)}>
        {props.name} 
    </span>
    )
}

export default Qualities