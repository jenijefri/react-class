
import React from "react";

export default function About()
{
    const addData=(val)=>{
        alert("data added.."+val);
};
    return(

        <div>This is About Component
        <button onClick={()=>addData("user 1")}>Add Data</button>
    </div>
    );
}
