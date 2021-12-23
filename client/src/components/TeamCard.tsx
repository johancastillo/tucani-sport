import React from "react";

export default function TeamCard({name, profession, image}:any) {
  return (
    <div className="card m-2" style={{ width: "18rem", marginTop: "10px" }}>
      <img src={image} className="card-img-top" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title">
            {name}
        </h5>
        
        <p className="card-text">
          {profession}
        </p>
      </div>
    </div>
  );
}
