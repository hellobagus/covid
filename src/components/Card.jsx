import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div
          className={`card-body  ${props.cardbody}`}
          style={{ height: "50px", opacity: "0.9"}}
        >
          <h5
            className={props.className}
            style={{ transform: "translateY(-12px)", fontSize: "15px"  }}
          >
          {props.data} <br/> {props.title} 
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
