import React from "react";

 export const Subject=({title, disc})=>{
    return(
        <div className="child">
            <h3>{title}</h3>
            <p>{disc}</p>
        </div>
    )
}